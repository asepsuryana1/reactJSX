import React, { Component } from 'react'
import TodoList from './TodoList'


export default class TodoBox extends Component {
    constructor(props) {
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
        return (
            <div>
                <h1> Daftar Todo</h1>
                <TodoList data={this.state.data} />
            </div>
        )
    }
}