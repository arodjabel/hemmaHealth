import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import history from '../../helpers/history';
import { recaptchaPost } from "../../helpers/post";
import './contactForm.css';

const initialState = {
  name: undefined,
  employer: undefined,
  email: undefined,
  phone: undefined,
  description: undefined,
  recaptchaResponse: undefined,
  loading: false,
  contactUsError: false,
  contactUsSuccess: false
}

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.recaptchaCallback = this.recaptchaCallback.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.renderRecaptcha = this.renderRecaptcha.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.success = this.success.bind(this);
    this.failure = this.failure.bind(this);
  }

  resetState() {
    this.setState(initialState);
  }

  recaptchaCallback(response) {
    this.setState({
      recaptchaResponse: response
    });
  }

  inputChange(e) {
    const key = e.target['name'];
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  renderRecaptcha() {
    window.grecaptcha.render('recaptcha', {
      sitekey: '6Lc2CBsTAAAAAKwvAUIOuugFmCXYqZg5VLlEDWQ9',
      theme: 'light',
      callback: this.recaptchaCallback
    });
  }

  success() {
    console.log('success');
    // this.resetState();
    history.push('/contact-us-confirmation')
  }

  failure() {
    this.setState({
      loading: false,
      contactUsError: true
    });
  }

  submitForm(e) {
    console.log('click');
    e.stopPropagation();
    this.setState({
      loading: true
    });
    const promise = recaptchaPost(this.state).promise;
    promise.then(this.success, this.failure);
  }

  componentDidMount() {
    window.addEventListener('load', this.renderRecaptcha);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.renderRecaptcha)
  }

  render() {
    return (
      <Form className="bottom-40">
        <FormGroup>
          <Label for="whoAreYou">Who are you?</Label>
          <Input type="text"
                 name="name"
                 id="whoAreYou"
                 placeholder="Name, Please"
                 onChange={this.inputChange}
                 disabled={this.state.loading}/>
        </FormGroup>
        <FormGroup>
          <Label for="whoAreYouWith">Who are you with?</Label>
          <Input type="text" name="employer" id="whoAreYouWith" placeholder="Company or Employer"
                 onChange={this.inputChange}
                 disabled={this.state.loading}/>
        </FormGroup>
        <FormGroup>
          <Label for="whatsYourEmail">What is your Email?</Label>
          <Input type="text" name="email" id="whatsYourEmail" placeholder="Email, Please"
                 onChange={this.inputChange}
                 disabled={this.state.loading}/>
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Best contact number?</Label>
          <Input type="text" name="phone" id="phoneNumber" placeholder="Phone Number"
                 onChange={this.inputChange}
                 disabled={this.state.loading}/>
        </FormGroup>
        <FormGroup>
          <Label for="details">How can we help?</Label>
          <Input type="textarea" name="description" id="details" placeholder=""
                 onChange={this.inputChange}
                 disabled={this.state.loading}/>
        </FormGroup>
        <FormGroup>
          <Label for="recaptcha">Sorry about this but, are you a human?</Label>
          <div id="recaptcha"/>
        </FormGroup>
        <FormGroup>
          <Button
            onClick={this.submitForm}
            className="top-20 contact-us-submit-button"
            disabled={!this.state.recaptchaResponse || !this.state.email || this.state.loading}>Send It! <i
            className={(this.state.loading && this.state.recaptchaResponse && this.state.email) ? 'far fa-paper-plane fa-spin' : 'far fa-paper-plane'}/>
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default ContactForm;