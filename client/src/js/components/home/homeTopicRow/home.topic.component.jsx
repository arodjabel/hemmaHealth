import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';

import history from '../../../helpers/history';
import homeConstants from '../home.constants';
import './home.topic.component.css';

class HomeTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: null };
    this.getTopicCards = this.getTopicCards.bind(this);
    this.getTopicContent = this.getTopicContent.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    history.push(`/${e.linkUrl}`);

  }

  getTopicContent() {
    return homeConstants().topicRow;
  }

  getTopicCards() {
    const data = this.getTopicContent();
    let image;
    const cards = data.map((row) => {
      image = (row.image) ? (
        <CardImg top width="100%"
                 src={row.image}
                 alt={row.caption}/>
      ) : null;
      return (<Col xs={12} md={6} lg={6} key={row.id} className={"top-40"}>
        <Card className={'border-primary mb-3 home-card'} onClick={this.clickHandler.bind(null, row)}>
          {image}
          <div className="card-img-overlay">
            <CardBody className={'home-card-body'}>
              <CardTitle>{row.title}</CardTitle>
              <CardSubtitle className={'text-primary'}>
                {row.body}
              </CardSubtitle>
            </CardBody>
          </div>
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
    );
  }
}

export default HomeTopics;