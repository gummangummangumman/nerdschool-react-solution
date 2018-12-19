import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import Todo from "./Todo";

import PropTypes from 'prop-types';



const TodoList = ({todoItems}) => (
  <div className="todoList">
    {todoItems.map(todoItem => (
      <TodoItem
      id={todoItem.id}
      key={todoItem.id}
      description={todoItem.description}
      />
    ))}
  </div>
);

TodoList.defaultProps = {
  todoItems : []
};

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo))
};

export default TodoList;
