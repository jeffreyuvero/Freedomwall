import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';


// components 
import Header from './components/design/Header';
import Body from './components/design/Body';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
