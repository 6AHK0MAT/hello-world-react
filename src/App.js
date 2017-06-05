import React, { Component } from 'react';
import './App.css';
import Header from "./Header";

//import Dropdown from "./Dropdown";

const menu = [
    {
        link: '/article',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
]

class App extends Component {
  render() {
    return (<div>
        <Header items={menu}/>
    </div>
    )
  }
}

export default App;
