import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import LoadingIndicator from "../loading/loading";

class HemmaPageTemplate extends React.Component {
  render() {
    return (
      <Container>
        {/*<LoadingIndicator/>*/}
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