import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { recaptchaPost } from "../../helpers/post";
import './contactForm.css';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      employer: undefined,
      email: undefined,
      phone: undefined,
      description: undefined,
      recaptchaResponse: undefined
    };
    this.recaptchaCallback = this.recaptchaCallback.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.renderRecaptcha = this.renderRecaptcha.bind(this);
    this.submitForm = this.submitForm.bind(this);
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

  submitForm(e) {
    console.log(this.state);

    function success(response) {
      console.log(response)
    }

    function failure(response) {
      console.log(response);
    }

    e.stopPropagation();
    const promise = recaptchaPost(this.state.recaptchaResponse).promise;
    promise.then(success, failure);
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
          <Input type="text" name="name" id="whoAreYou" placeholder="Name, Please" onChange={this.inputChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="whoAreYouWith">Who are you with?</Label>
          <Input type="text" name="employer" id="whoAreYouWith" placeholder="Company or Employer"
                 onChange={this.inputChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="whatsYourEmail">What is your Email?</Label>
          <Input type="text" name="email" id="whatsYourEmail" placeholder="Email, Please" onChange={this.inputChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Best contact number?</Label>
          <Input type="text" name="phone" id="phoneNumber" placeholder="Phone Number" onChange={this.inputChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="details">How can we help?</Label>
          <Input type="textarea" name="description" id="details" placeholder="" onChange={this.inputChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="recaptcha">Sorry about this but, are you a human?</Label>
          <div id="recaptcha"/>
        </FormGroup>
        <FormGroup>
          <Button
            onClick={this.submitForm}
            className="top-20 contact-us-submit-button"
            disabled={!this.state.recaptchaResponse || !this.state.email}>Send It! <i
            className={'far fa-paper-plane'}></i>
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default ContactForm;