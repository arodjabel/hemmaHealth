import React from 'react';
import HemmaPageTemplate from "../../components/page/pageTemplate";
import SubscribeComponent from '../../components/subscribe/subscribe'

class HemmaSubscribe extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HemmaPageTemplate
        title={"Get Hemma News"}
        subTitle='We will send you periodic news'>
        <SubscribeComponent/>
      </HemmaPageTemplate>
    );
  }
}

export default HemmaSubscribe;