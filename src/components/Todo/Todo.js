import {Component} from 'react'

class Todo extends Component {
    todoClickHandler = (e, todo) => {
        e.preventDefault();
        if (!todo.isDone) {
            this.props.onClickHandler(todo)
        }
    }

    render () {
        const {todo} = this.props;
        return (
            <p onClick={e => this.todoClickHandler(e, todo)} className="list-view">
                <span><b>{todo.id + '. ' + todo.content}</b></span>
                <span className={todo.isDone ? 'text-success' : 'text-warning cursor-pointer'}>
                    <small>{todo.isDone ? 'Completed' : 'Pending'}</small>
                </span>
            </p>
        )
    }
}

export default Todo;