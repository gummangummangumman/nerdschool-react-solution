import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import Todo from "./Todo";
import {createTodo} from "./todoActions";


class TodoListContainer extends Component {

    componentDidMount(){
    }

    render(){
      return <TodoList todoItems={this.props.todoItems} />;
    }
}

TodoListContainer.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired,
  createTodoItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todoItems: state.todos
});

const mapDispatchToProps = dispatch => ({
  createTodoItem: description => dispatch(createTodo(description))
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
