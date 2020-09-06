/**
 * Created by HuyHero on 6/9/20
 */


import React, { useState, useEffect } from 'react';
import './App.css';
//components
import Form from './components/Forms';
import TodoList from './components/ToDoList';

function App() {
  //RUN ONCE
  useEffect(() => {
    getLocalTodos();
  }, []); // must under useEffect following bacause load data before load website // recommend the first code

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //effect status
  useEffect(() => {
    filterHanderTodo();
    saveLocalTodos();
  }, [todos, status]); //need both bacause todos changed that status changed too!!!
  /**
   * NOTE useEffect (with paramate 2)
   * if nothing => always run after rendering
   * if [] => run only once
   * if [value] => run when the value is changed
   */

  //filter along status
  const filterHanderTodo = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(
          (todo) => todo.completed === true
        ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(
          (todo) => todo.completed === false
        ));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
   };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      //localStorage.setItem("todos", JSON.stringify(todos));
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
   };
  
  return (
    <div className="App">
      <header>
        <h1>Hero's to do list.</h1>
      </header>
        <Form 
          todos={todos} 
          setTodos={setTodos} 
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList 
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
