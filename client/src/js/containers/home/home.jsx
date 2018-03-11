import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardText } from 'reactstrap';
import './home.css';
// import homeImage from '../../../images/human-on-cliff.jpg';
import HomeTopics from '../../components/home/homeTopicRow/home.topic.component';

class HemmaHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="top-40 bottom-40">
          <Col xs={12} lg={8}>
            <div className="rounded home-tile-main-image"/>
          </Col>
          <Col xs={12} lg={4}>
            <h1>Hemma Health</h1>
            <p>
              Your choice for eClincalWorks implementations.
            </p>
            <Button color="primary">How We Can Help</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <CardText>We are experts in eClinicalWorks optimization and implementations, clinical quality
                  improvement, revenue cycle optimization, and much more...</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <HomeTopics/>
      </Container>
    )
  }
}

export default HemmaHome;