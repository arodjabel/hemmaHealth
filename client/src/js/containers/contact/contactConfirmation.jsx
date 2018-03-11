import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import HemmaPageTemplate from "../../components/page/pageTemplate";
import ContactForm from '../../components/contact/contactForm';

class HemmaContactConfirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HemmaPageTemplate
        title={"Thank you for contacting us!!"}
        subTitle={"We got your message and will contact you very soon."}>
      </HemmaPageTemplate>
    )
  }
}

export default HemmaContactConfirmation;
