import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store'


import 'bootstrap/dist/css/bootstrap.min.css';


// components 
import Header from './components/design/Header';
import Body from './components/design/Body';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
    		<div className="App">
          <Header />
          <Body />
        </div>
      </Provider>
    );
  }
}

export default App;
