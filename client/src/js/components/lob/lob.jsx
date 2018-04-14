import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap';
import lobStatements from './lobConstants';

class LobStatements extends React.Component {
  constructor() {
    super();
    this.state = {
      statements: []
    };
    this.getStatementTiles = this.getStatementTiles.bind(this);
    this.getStatementData = this.getStatementData.bind(this);
  }

  getStatementData() {
    return lobStatements().statements;
  }

  getStatementTiles() {
    const data = this.getStatementData();
    const statementTiles = data.map((row) => (
      <Col xs={12} md={6} className={"top-20"} key={row.id}>
        <Card className={"border-primary mb-3"}>
          <CardBody>
            <CardTitle className={"text-primary"}>{row.header}</CardTitle>
            <CardText>{row.body}</CardText>
          </CardBody>
          <CardImg top width="100%"
                   src={row.image}/>
        </Card>
      </Col>
    ));
    return statementTiles;
  }

  componentDidMount() {
    this.setState({
      statements: this.getStatementTiles()
    })
  }

  render() {
    return (
      <Row>
        {this.state.statements}
      </Row>
    )
  }
}

export default LobStatements;
