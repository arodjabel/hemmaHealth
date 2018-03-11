import React from 'react';

class LoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <i className="fas fa-cog fa-spin fa-3x"/>
      </div>
    )
  }
}

export default LoadingIndicator;
