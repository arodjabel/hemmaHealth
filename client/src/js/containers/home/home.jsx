import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './home.css';
import history from '../../helpers/history';
import HomeTopics from '../../components/home/homeTopicRow/home.topic.component';

class HemmaHome extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    history.push('/services');
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={12} md={{ size: 10, offset: 1 }}>
            <Row className="top-40 bottom-40">
              <Col xs={12} lg={8}>
                <div className="rounded home-tile-main-image"/>
              </Col>
              <Col xs={12} lg={4}>
                <h1>Hemma Health</h1>
                <p>
                  Your choice for <span className="badge badge-primary">eClincalWorks</span> implementations, project
                  management, revenue cycle, billing, workflow development, and all other EMR related need.
                  No customer is too big or too small.
                  With clients <span className="badge badge-primary">across the United States</span>, we have seen it
                  all and done it all.
                  We work with non-profit, for-profit, FQHC, rural, urban, on-site, remote, full-time, part-time.
                </p>
                <Button color="primary" onClick={this.clickHandler} data-link={'services'}>How We Can Help</Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Card className={'border-primary mb-3'}>
                  <CardBody>
                    <CardTitle tag={'h2'}>We are experts in eClinicalWorks</CardTitle>
                    <CardSubtitle className={'text-primary'}> optimization and implementations, clinical quality
                      improvement, revenue cycle optimization, and much more...</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <HomeTopics/>
            <Row>
              <Col xs={12}></Col>
            </Row>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default HemmaHome;