import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';


// components 
import Header from './components/design/Header';
import Body from './components/design/Body';
import Add from './components/components/Add';
import NotFound from './components/design/NotFound';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
    		<Router>
          <div className="App">
              <Header />
            <Switch>
              <Route exact path = "/" component = {Body} />
              <Route exact path = "/add" component = {Add} />
              <Route component = {NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
