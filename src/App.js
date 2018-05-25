import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
      const user = {
          name :"anan",
          hobbies: ["sport","reading"],
      };
    return (
      <div className="container">
          <div className="row">
              <div className="col-xs-1 col-xs-offset-11">
                  <Header/>
              </div>
          </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>hello</h1>
          </div>
        </div>
          <div className="row">
              <div className="col-xs-1 col-xs-offset-11">
                  <Home name={"max"} initialage={12} user={user}>
                      <p>hihi malu</p>
                  </Home>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
