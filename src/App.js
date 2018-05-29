import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";

import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/header" component={Header}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    );
  }
}

export default App;
