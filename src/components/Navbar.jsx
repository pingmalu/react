import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render(){
        return (
            <header className="header">
                <nav>
                    <div className="container">
                        <ul className="d-flex list-style-none">
                            <li className="ml-4">
                                <Link to="/" className="HeaderNavlink">首页</Link>
                            </li>
                            {/*<li>
                                <Link to="/header">header</Link>
                            </li>
                            */}
                            <li className="ml-4">
                                <Link to="/about" className="HeaderNavlink">关于</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}