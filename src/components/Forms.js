import React, { Component } from 'react';

class Form extends Component {
    
    handleChangeText = (e) => {
        this.props.setInputText(e.target.value);
    };
    
    handleSubmitText = (e) => {
        e.preventDefault(); //prevent a brower reload/refresh (recommend for submmit button)
        this.props.setTodos([
            ...this.props.todos, {text: this.props.inputText, completed: false, id: Math.random() * 1000}
        ]);
        this.props.setInputText(""); // set inputText = ""; => add value to input for "" on website
    };

    handleStatus = (e) => {
        this.props.setStatus(e.target.value);
    };

    render() {
        return (
            <form>
                <input value={this.props.inputText} onChange={this.handleChangeText} type="text" placeholder="Enter want to do..." className="todo-input"/>
                <button onClick={this.handleSubmitText} type="submit" className="todo-button">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={this.handleStatus} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>      
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>                     
            </form>
        );
    }
}

export default Form;