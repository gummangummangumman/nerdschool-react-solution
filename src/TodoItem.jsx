import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { doTodo, undoTodo, deleteTodo } from "./todoActions";

import './todoItem.css';


class TodoItem extends Component{


  check(){
    if(document.getElementById("todoItemCheckbox-"+this.props.id).checked)
      this.props.doTodoItem(this.props.id);
    else
      this.props.undoTodoItem(this.props.id);
  }

  render(){
    return <div className="todo-item__container">
      <input type="checkbox" id={`todoItemCheckbox-${this.props.id}`} onClick={() => this.check()} />
      <label htmlFor={`todoItemCheckbox-${this.props.id}`}>{this.props.description}</label>
      <input type="button" value="Delete" className="btn btn-danger" onClick={() => this.props.deleteTodoItem(this.props.id)} />
    </div>
  }
}


TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

const mapDispatchToProps = dispatch => ({
  doTodoItem: id => dispatch(doTodo(id)),
  undoTodoItem: id => dispatch(undoTodo(id)),
  deleteTodoItem: id => dispatch(deleteTodo(id))
});

export default connect(null, mapDispatchToProps) (TodoItem);
