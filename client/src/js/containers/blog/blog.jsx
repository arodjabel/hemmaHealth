import React from 'react';
import HemmaPageTemplate from "../../components/page/pageTemplate";
import BlogComponent from '../../components/blog/blog.component';

class HemmaBlog extends React.Component {
  constructor(props) {
    super(props)
    this.getSubtitle = this.getSubtitle.bind(this);
  }

  getSubtitle() {
    return (
      <span>
        <span>Follow Us! </span>
        <a href="https://medium.com/@consultinglife1"
           target="_blank">Medium</a>
      </span>
    );
  }

  render() {
    return (
      <HemmaPageTemplate
        title={"Hemma Blog"}
        subTitle={this.getSubtitle()}>
        <BlogComponent/>
      </HemmaPageTemplate>
    );
  }
}

export default HemmaBlog;