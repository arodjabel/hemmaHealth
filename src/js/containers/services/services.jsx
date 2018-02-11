import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import HemmaPageTemplate from '../../components/page/pageTemplate';

import serviceConstants from './services.constant';
import './services.css';

class HemmaServices extends React.Component {
  constructor(props) {
    super(props);
    this.getColumns = this.getColumns.bind(this);
    this.getServiceConstants = this.getServiceConstants.bind(this);
    this.getCardDetails = this.getCardDetails.bind(this);
  }

  getServiceConstants() {
    return serviceConstants().serviceCards;
  }

  getCardDetails(details) {
    return details.map((row) => {
      return (
        <CardBody key={row.title}>
          <CardSubtitle tag={'h5'} className={'text-secondary'}>{row.title}</CardSubtitle>
          {row.body.map((str) => {
            return <CardText key={str}>{str}</CardText>
          })}
        </CardBody>
      );
    });
  }

  getColumns() {
    const serviceConstants = this.getServiceConstants();
    const columns = serviceConstants.map((row) => {
      return (
        <Col xs={12} xl={6} key={row.id} className="bottom-40">
          <Card >
            <CardHeader tag="h3" className={"bg-primary text-white"}>
              {row.title}
            </CardHeader>
            <CardBody>
              <CardTitle>{row.subTitle}</CardTitle>
            </CardBody>
            {this.getCardDetails(row.details)}
          </Card>
        </Col>
      );
    });
    return columns;
  }

  render() {
    return (
      <HemmaPageTemplate
        title={"Our Service Offering"}
        subTitle={"You need it? We have it."}
      >
        <Row>{this.getColumns()}</Row>
      </HemmaPageTemplate>
    )
  }
}

export default HemmaServices;