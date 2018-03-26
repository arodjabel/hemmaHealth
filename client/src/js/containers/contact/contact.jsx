import React from 'react';
import { Row, Col } from 'reactstrap';
import HemmaPageTemplate from "../../components/page/pageTemplate";
import ContactForm from '../../components/contact/contactForm';

class HemmaContact extends React.Component {
  render() {
    return (
      <HemmaPageTemplate
        title={"Let's Get In Touch"}
        subTitle={"Please fill out and submit the contact form. We will be in touch soon."}>
        <Row>
          <Col xs={12}>
            <ContactForm/>
          </Col>
        </Row>
      </HemmaPageTemplate>
    )
  }
}

export default HemmaContact;
