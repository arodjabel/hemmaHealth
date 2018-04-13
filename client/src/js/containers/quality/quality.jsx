import React from 'react';
import { Row } from 'reactstrap';
import HemmaPageTemplate from '../../components/page/pageTemplate';
import QualityComponent from "../../components/quality/quality.component";

class HemmaQuality extends React.Component {
  render() {
    return (
      <HemmaPageTemplate
        title={"Quality"}
        subTitle={"Continuous Quality Improvement"}>
        <QualityComponent/>
      </HemmaPageTemplate>
    );
  }
}

export default HemmaQuality;