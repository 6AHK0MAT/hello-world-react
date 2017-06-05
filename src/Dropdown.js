/**
 * Created by MiB on 05.06.2017.
 */
import React, { Component } from 'react';

class Dropdown extends Component {
    constructor (props){
        super(props);
        this.state = { isOpened: false};
    }

    toggleState(){
        this.setState({ isOpened: !this.state.isOpened});
    }

    render() {
        console.log( 'isOpened', this.state.isOpened);
        let dropdownText;
        if (this.state.isOpened){
            dropdownText = <div>Here dropdown</div>
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                DropDown Baby!
                {dropdownText}
            </div>
        );
    }
}

export default Dropdown;