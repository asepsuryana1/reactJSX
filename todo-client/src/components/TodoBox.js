import React, { Component } from 'react'


export default class TodoForm extends Component {
    onstructor(props) {
        super(props);
        this.state = { data: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    render() {

    }
}