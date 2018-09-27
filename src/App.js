import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";

import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';


class App extends Component {
  render() {
      let b_name = '';
      // if(document.domain === 'pingmalu.github.io' || document.domain === 'git.malu.me'){
      //       b_name = '/react_tmp_01';
      // }
      let m_domain_arr = ['pingmalu.github.io','git.malu.me'];
      let m_domain_arr2 = ['cloud.localhost'];
      if(m_domain_arr.includes(document.domain)){
          b_name = '/react';
      }else if(m_domain_arr2.includes(document.domain)) {
          b_name = '/Work/nodejs/react/1/hello-react/build';
      }
      return (
          <Router basename={b_name}>
              <div>
                  <Navbar/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/header" component={Header}/>
                  <Route path="/about" component={About}/>
              </div>
          </Router>
      );
  }
}

export default App;
