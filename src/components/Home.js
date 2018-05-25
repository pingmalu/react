import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.initialage
        }
        //this.age = this.props.age;
    };
    onMakeOlder() {
        this.setState({
            age: this.state.age += 3
        });
        //this.age += 3;
        console.log(this);
    };
  render() {
      console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
              <div>your name is {this.props.name}, your age is {this.state.age}</div>
              <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
              <div>
                  <h4>hobbies</h4>
                  <ul>
                      {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                  </ul>
                  {this.props.children}
              </div>
          </div>
        </div>

      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
};
