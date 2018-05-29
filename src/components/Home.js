import React, { Component } from 'react';
import axios from 'axios';
import './Home.css'

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            ipt: '',
            arr: []
        };
        this.input_change= this.input_change.bind(this);
    }

    input_change(ev){
        let SEARCH_URL = 'http://malu.me/api/search/';
        axios.get(SEARCH_URL+ev.target.value)
            .then(res =>{
                console.log(res.data);
                this.setState({
                    arr: res.data.records
                })
            }).catch(function (error) {
                console.log(error);
            });
    }
    render() {
        let li_list = '';
        if(this.state.arr instanceof Array){
            li_list = this.state.arr.map((val,index)=>{
                return (
                    <li className="list-item" key={index}><a href={val.url} title={val.summary}> {val.title.replace('– 萌马笔记 – 因为记性差，所以记笔记','')}</a></li>
                )
            });
        }
        return (
          <div className="container m_input_search">
              <input onChange={this.input_change}/>
              <ul>
                  {li_list}
              </ul>
          </div>
        );
    }
}

