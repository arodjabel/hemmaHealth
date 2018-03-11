import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import HemmaPageTemplate from "../../components/page/pageTemplate";
import ContactForm from '../../components/contact/contactForm';

class HemmaNotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HemmaPageTemplate
        title={"Whoops...  :("}
        subTitle={"Sorry, something went wrong or this page URL is not valid. Try again or return later."}>
      </HemmaPageTemplate>
    )
  }
}

export default HemmaNotFound;
