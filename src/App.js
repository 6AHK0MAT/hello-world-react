import React, { Component } from 'react';
import './App.css';
//import Header from "./Header";
//import RegistrationForm from './RegistrationForm'

//import Dropdown from "./Dropdown";

/*
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
*/

class App extends Component {
    submit(){
        console.log('submit', this.testInput.value);
    }
  render() {
    return (
        <div>
            <input type="text" placeholder="test" ref={(input) => this.testInput = input} />
            <button onClick={this.submit.bind(this)}>Submit</button>
        </div>
/*
        <div className="container">
        <Header items={menu}/>
            <RegistrationForm/>
        </div>
*/
    )
  }
}

export default App;
