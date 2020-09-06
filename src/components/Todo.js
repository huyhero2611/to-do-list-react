import React, { Component } from 'react';

class Todo extends Component {

    deleteTodo = () => {
        this.props.setTodos(this.props.todos.filter(
            (el) => (
                el.id !== this.props.todo.id  //show the elements that different with el => hide el on screen(or remove state)
            )
        ))
    };

    completedHandler = () => {
        this.props.setTodos(this.props.todos.map(
            (item) => {
                if (item.id === this.props.todo.id) {
                    return {
                        ...item, completed: !item.completed
                    };
                }
                return item;
            }
        ))
    };

    render() {
        return (
            <div className="todo">
                <li className={`todo-item ${this.props.todo.completed ? "completed" : ""}`}>
                    {this.props.text}       
                </li>
                <button onClick={this.completedHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={this.deleteTodo} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        );
    }
}

export default Todo;