import React from 'react';
import HemmaPageTemplate from "../../components/page/pageTemplate";

class HemmaNotFound extends React.Component {
  render() {
    return (
      <HemmaPageTemplate
        title={"Whoops...  :("}
        subTitle={"Sorry, something went wrong or this page URL is not valid. Try again or return later."}>
      </HemmaPageTemplate>
    )
  }
}

export default HemmaNotFound;
