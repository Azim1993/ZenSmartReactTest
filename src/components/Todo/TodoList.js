import {Component} from 'react';
import Todo from './Todo'

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

    handleTodoClick = (propsTodo) => {
        const updatedTodolist = this.state.todolist.map(todo => {
            if (todo.id === propsTodo.id) {
                todo.isDone = true;
            }
            return todo;
        })
        this.setState({ ...this.state, todolist: updatedTodolist})
    }

    render () {
        return (
            <div className="panel">
                <h2>Todo List</h2>
                <hr />
                {
                    this.state.todolist.map(todo => (
                        <Todo key={todo.id}
                            onClickHandler={this.handleTodoClick}
                            todo={todo}
                        ></Todo>
                    ))
                }
            </div>
        );
    }
}

export default TodoList;