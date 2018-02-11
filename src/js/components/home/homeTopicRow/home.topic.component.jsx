import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import homeConstants from '../home.constants';

class HomeTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: null};
    this.getTopicCards = this.getTopicCards.bind(this);
    this.getTopicContent = this.getTopicContent.bind(this);
  }

  getTopicContent() {
    return homeConstants().topicRow;
  }

  getTopicCards() {
    const data = this.getTopicContent();
    const cards = data.map((row) => {
      return (<Col xs={12} md={6} lg={4} key={row.id} className={"top-40"}>
        <Card>
          <CardBody>
            <CardTitle>{row.title}</CardTitle>
            <CardText>{row.body}</CardText>
          </CardBody>
        </Card>
      </Col>)
    });
    return cards;
  }

  componentDidMount() {
    console.log(this.getTopicCards());
    this.setState({
      cards: this.getTopicCards()
    });
  }

  render() {
    return (
      <Row>
        {this.state.cards}
      </Row>
    );
  }
}

export default HomeTopics;