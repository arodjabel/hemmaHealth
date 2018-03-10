import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';

class HemmaPageTemplate extends React.Component {
  render() {
    return (
      <Container>
        <Row className={"top-40"}>
          <Col>
            <Jumbotron>
              <h1 className="display-3">
                {this.props.title}
              </h1>
              <p className="lead">{this.props.subTitle}</p>
            </Jumbotron>
          </Col>
        </Row>
        <div>{this.props.children}</div>
      </Container>
    );
  }
}

export default HemmaPageTemplate;