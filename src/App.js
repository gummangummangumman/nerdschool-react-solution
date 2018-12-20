import React, { Component } from 'react';
import './App.css';

import Summary from "./Summary";
import AddTodo from "./AddTodo";
import TodoListContainer from "./TodoListContainer";

class App extends Component {

  render() {
    return (
      <div className="App">
          <h1>Todo List</h1>
          <Summary />
          <AddTodo />
          <TodoListContainer />

          <p>
            <br />
          </p>
          <p>
            <br />
          </p>
          <footer>Made as an introduction to React and Redux. Source code can be found over at <a href="https://github.com/gummangummangumman/nerdschool-react-solution">github</a>
          </footer>
      </div>
    );
  }
}

export default App;
