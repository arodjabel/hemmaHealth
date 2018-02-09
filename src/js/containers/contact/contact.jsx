import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

class HemmaContact extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1 className="display-3">Let's Get In Touch</h1>
              <p className="lead">Please fill out and submit the contact form. We will be in touch soon.</p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HemmaContact;
