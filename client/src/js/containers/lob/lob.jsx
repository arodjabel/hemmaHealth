import React from 'react';
import HemmaPageTemplate from "../../components/page/pageTemplate";
import LobStatements from '../../components/lob/lob';

class HemmaLob extends React.Component {
  render() {
    return (
      <HemmaPageTemplate
        title={"Personalized Invoices & Statements"}
        subTitle={"You'll never have to worry about sending invoices or followups. See some examples below and remember that any style or format can be achieved."}>
        <LobStatements/>
      </HemmaPageTemplate>
    );
  }
}

export default HemmaLob;