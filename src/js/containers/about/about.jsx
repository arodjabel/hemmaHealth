import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HemmaPageTemplate from "../../components/page/pageTemplate";
import AboutUsTopics from "../../components/about/aboutCards/aboutUs.topic.component";

class HemmaAbout extends React.Component {

  render() {
    return (
      <HemmaPageTemplate
        title={"About Hemma Health"}
        subTitle={"We Hail From Kansas City, Missouri"}>
        <AboutUsTopics/>
      </HemmaPageTemplate>
    );
  }
}

export default HemmaAbout;