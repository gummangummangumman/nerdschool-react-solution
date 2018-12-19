import React, { Component } from 'react';
import './App.css';

import Summary from "./Summary";
import AddTodo from "./AddTodo";
import TodoListContainer from "./TodoListContainer";
import Todo from "./Todo";

class App extends Component {


  render() {
    return (
      <div className="App">
          <h1>My Todo App</h1>
          <Summary />
          <AddTodo />
          <TodoListContainer />

          <p>
            <br />
          </p>
          <footer>Source code can be found on <a href="https://github.com/gummangummangumman/nerdschool-react-solution">github</a></footer>
      </div>
    );
  }
}

export default App;
