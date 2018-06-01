import React, { Component } from 'react';
import axios from 'axios';
import './Home.css'

export default class Home extends Component {
    constructor(){
        super();
        window.CancelToken = axios.CancelToken;
        //window.source = window.CancelToken.source();
        this.state={
            ipt: '',
            arr: [],
            geting: false,
            //CancelToken: axios.CancelToken,
            source: window.CancelToken.source()
        };
        this.input_change= this.input_change.bind(this);
    }

    onChange = (e) => {
        this.input_change(e)
    };

    onKeyup = (e) => {
        e.keyCode === 13 && this.input_change(e)
    };

    input_change(ev){
        //console.log(ev.target.value.length);
        /*
        if(ev.target.value.length > 1){
            this.state.source.cancel('test');
        }
        */
        let SEARCH_URL = 'http://malu.me/api/search/'+ev.target.value;
        if(this.state.geting) {  //之前有处理中的，先取消再重新初始化
            this.setState({
                geting: false
            });
            this.state.source.cancel();
            //this.state.source.cancel(ev.target.value);
            //console.log('cancel:',ev.target.value);
            //window.CancelToken = axios.CancelToken;
            this.state.source = window.CancelToken.source();
            /*
            this.setState({
                geting: false
            });
            */
            /*
            this.setState({
                source: window.CancelToken.source()
            });
            */
        }else{
            this.setState({
                geting: true
            });
        }
        axios.get(SEARCH_URL, {
            cancelToken: this.state.source.token
        }).then(res => {
            this.setState({
                geting: false
            });
            //console.log(res.data);
            this.setState({
                arr: res.data.records
            });
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        let li_list = '';
        if(this.state.arr instanceof Array){
            li_list = this.state.arr.map((val,index)=>{
                return (
                    <li className="list-item" key={index}><a href={val.url} title={val.summary}> {val.title.replace('– 萌马笔记 – 因为记性差，所以记笔记','')}  <span className="m-span">{val.summary}</span></a></li>
                )
            });
        }
        return (
          <div className="container m_input_search">
              <input onChange={this.onChange} onKeyUp={this.onKeyup}/>
              <ul>
                  {li_list}
              </ul>
          </div>
        );
    }
}

