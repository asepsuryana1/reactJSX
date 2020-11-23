import React, { Component } from 'react'


export default class TodoBox extends Component {
    onstructor(props) {
        super(props);
        this.state = { data: [] };

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    addTodo() {

    }
    deleteTodo() {

    }

    render() {

    }
}