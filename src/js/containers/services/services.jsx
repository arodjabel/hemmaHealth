import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import serviceConstants from './services.constant';
import './services.css';

class HemmaServices extends React.Component {
  constructor(props) {
    super(props);
    this.getColumns = this.getColumns.bind(this);
    this.getServiceConstants = this.getServiceConstants.bind(this);
  }

  getServiceConstants() {
    return serviceConstants();
  }

  getColumns() {
    const serviceConsts = this.getServiceConstants();
    const columns = serviceConsts.map((row) => {
      return (
        <Col xs={12} sm={6} md={4} key={row.id} className="bottom-40">
          <Card>
            {/*<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />*/}
            <CardBody>
              <CardTitle>{row.title}</CardTitle>
              {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
              <CardText>{row.body}</CardText>
              {/*<Button>Button</Button>*/}
            </CardBody>
          </Card>
        </Col>
      );
    });
    return columns;
  }

  render() {
    return (
      <Container>
        <Row>{this.getColumns()}</Row>
      </Container>
    )
  }
}

export default HemmaServices;