import React, { Component } from 'react';
//components
import Todo from './Todo';
class TodoList extends Component {
    render() {
        return (
            <div>
                <div className="todo-container">
                
                    <div>
                        <ul className="todo-list">
                            {this.props.filteredTodos.map(
                                (todo) => (
                                    <Todo
                                        key={todo.id} // each child in a list must be a key
                                        text={todo.text}
                                        todo={todo}
                                        todos={this.props.todos}
                                        setTodos={this.props.setTodos}
                                    /> 
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;