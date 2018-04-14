import React from 'react';
import { Row, Col, Card, CardSubtitle, CardBody, CardTitle, CardText } from 'reactstrap';
import { getMediumBlog } from "../../helpers/get";

class BlogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediumPosts: []
    };

    this.blogSuccess = this.blogSuccess.bind(this);
    this.blogError = this.blogError.bind(this);
    this.setMediumBlogPosts = this.setMediumBlogPosts.bind(this);
  }

  setMediumBlogPosts(d) {
    if (d.payload && d.payload.references) {
      const postArr = Object.keys(d.payload.references.Post).map(i => d.payload.references.Post[i]);
      this.setState({ mediumPosts: postArr });
    }
  }

  blogSuccess(response) {
    const res = response.data.split('])}while(1);</x>')[1];
    this.setMediumBlogPosts(JSON.parse(res));
  }

  blogError(e) {
    console.log(e);
  }

  componentDidMount() {
    const blogPromise = getMediumBlog().promise;
    blogPromise.then(this.blogSuccess, this.blogError);
  }

  getMediumCards(row, i) {
    return (
      <Col xs={12} key={row.id} className={(i > 0) ? 'top-40' : ''}>
        <Card>
          <CardBody>
            <CardTitle>
              {row.title}
            </CardTitle>
            <CardSubtitle>
              {row.content.subtitle}
            </CardSubtitle>
            <CardText>
              <a href={`https://medium.com/@consultinglife1/${row.uniqueSlug}`} target={'_blank'}>read more</a>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    )
  }

  render() {
    return (
      <Row>
        {this.state.mediumPosts.map(this.getMediumCards)}
      </Row>
    );
  }
}

export default BlogComponent;