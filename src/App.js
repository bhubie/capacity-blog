import React, { Component } from 'react';

import NavigationBar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
