import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { recaptchaSubscribePost } from '../../helpers/post';

class SubscribeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      recaptchaResponse: null,
      emailAddress: false,
      lastName: false,
      firstName: false,
    };

    this.renderRecaptcha = this.renderRecaptcha.bind(this);
    this.recaptchaCallback = this.recaptchaCallback.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  recaptchaCallback(response) {
    this.setState({
      recaptchaResponse: response
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
    e.stopPropagation();
    this.setState({
      loading: true
    });
    const promise = recaptchaSubscribePost(this.state).promise;
    promise.then(this.success, this.failure);
  }

  inputChange(e) {
    const key = e.target['name'];
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  componentDidMount() {
    window.addEventListener('load', this.renderRecaptcha);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.renderRecaptcha)
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text"
                 autoComplete={"first name"}
                 name="firstName"
                 id="firstName"
                 placeholder="First Name, Please"
                 onChange={this.inputChange}
                 disabled={this.state.loading}/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text"
                 autoComplete={"last name"}
                 name="lastName"
                 id="lastName"
                 placeholder="Last Name, Please"
                 onChange={this.inputChange}
                 disabled={this.state.loading}/>
        </FormGroup>
        <FormGroup>
          <Label for="emailAddress">Email Address?</Label>
          <Input type="text"
                 autoComplete={"email"}
                 name="emailAddress"
                 id="emailAddress"
                 onChange={this.inputChange}
                 placeholder="Email Address, Please"/>
        </FormGroup>
        <FormGroup>
          <Label for="recaptcha">Sorry about this but, are you a human?</Label>
          <div id="recaptcha"/>
        </FormGroup>
        <FormGroup>
          <Button
            onClick={this.submitForm}
            className="top-20 contact-us-submit-button"
            disabled={!this.state.recaptchaResponse || !this.state.emailAddress || !this.state.lastName || !this.state.firstName || this.state.loading}
          >
            Send It! <i
            className={(this.state.loading && this.state.recaptchaResponse && this.state.email) ? 'far fa-paper-plane fa-spin' : 'far fa-paper-plane'}/>
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default SubscribeComponent;

