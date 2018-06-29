import React, { Component } from 'react';
import './About.css';
import EchartsTest from './Charts.js';

export default class About extends Component {
    render(){
        return(
            <div className="container">
                {/*<h2 className="m-h2">这是<a href="http://malu.me">malu.me</a>的站内搜索</h2>*/}
                <EchartsTest/>
            </div>
        );
    }
}