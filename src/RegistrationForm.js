import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        console.log('form is submitted. Email value is', this.state.email);
    }

    handleEmailChange(event){
        console.log('email was changed', event.target.value);
        this.setState({email: event.target.value})
    }

    render() {
        return (<div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        className="emailField"
                    />
                    <button className="submitButton">Save</button>

                </form>
            </div>
        )
    }
}

export default RegistrationForm;
