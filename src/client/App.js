import React, { Component } from 'react';
import './app.css';

export default class App extends Component {

    // componentDidMount() {
    //     fetch('/api/getUsername')
    //         .then(res => res.json())
    //         .then(user => this.setState({username: user.username}));
    // }

    render() {
        return (
            <div>
                <h1>Hello there</h1>
            </div>
        );
    }
}