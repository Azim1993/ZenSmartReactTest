import {Component, useState} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todolist: [
                {id: 1, content: 'todo list 1', isDone: false},
                {id: 2, content: 'todo list 2', isDone: false},
                {id: 3, content: 'todo list 3', isDone: false},
                {id: 4, content: 'todo list 4', isDone: false},
                {id: 5, content: 'todo list 5', isDone: false},
                {id: 6, content: 'todo list 6', isDone: false},
                {id: 7, content: 'todo list 7', isDone: false},
            ]
        }
    }
    render () {
        return (
            <div className="panel">
                <h2>Todo List</h2>
                <hr />
                {
                    this.state.todolist.map(todo => (
                        <p>{todo.content}</p>
                    ))
                }
            </div>
        );
    }
}

export default TodoList;