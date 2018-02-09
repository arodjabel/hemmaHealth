import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardText} from 'reactstrap';
import './home.css';

class HemmaHome extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="top-40 bottom-40">
          <Col xs={12} lg={8}>
            <img className="img-fluid rounded" src="http://placehold.it/900x400" alt=""/>
          </Col>
          <Col xs={12} lg={4}>
            <h1>Hemma Health</h1>
            <p>
              Your choice for ECW implementation
            </p>
            <Button color="primary">How We Can Help</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HemmaHome;