import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      account: null,
      contract: null
    }
  }

  render() {
    return (
      <div>
	<h1>Welcome to DFM</h1>
      </div>
    )
  }
}

export default App;
