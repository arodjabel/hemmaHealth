import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import qualityCards from './quality.constants';

class QualityComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: null };
    this.getTopicCards = this.getTopicCards.bind(this);
    this.getTopicContent = this.getTopicContent.bind(this);
  }

  getTopicContent() {
    return qualityCards().qualityCards;
  }

  getTopicCards() {
    const data = this.getTopicContent();
    const cards = data.map((row) => {
      return (<Col xs={12} className={"top-20"} key={row.id}>
        <Card className={"border-primary mb-3"}>
          <CardBody>
            <CardTitle className={"text-primary"}>{row.header}</CardTitle>
            <CardText>{row.body}</CardText>
          </CardBody>
        </Card>
      </Col>)
    });
    return cards;
  }

  componentDidMount() {
    this.setState({
      cards: this.getTopicCards()
    });
  }

  render() {
    return (
      <Row>
        {this.state.cards}
      </Row>
    )
  }
}

export default QualityComponent;