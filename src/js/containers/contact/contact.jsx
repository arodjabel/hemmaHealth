import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import HemmaPageTemplate from "../../components/page/pageTemplate";

class HemmaContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HemmaPageTemplate
        title={"Let's Get In Touch"}
        subTitle={"Please fill out and submit the contact form. We will be in touch soon."}>
        <Row>
        </Row>
      </HemmaPageTemplate>
    )
  }
}

export default HemmaContact;
