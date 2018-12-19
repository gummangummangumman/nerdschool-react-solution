import React, { Component } from 'react';
import PropTypes from "prop-types";
import Todo from "./Todo";
import {connect} from "react-redux";

import "./summary.css";



class Summary extends Component{

  //HVORFOR BLIR IKKE DENNE KALT VED OPPDATERING AV TODOS??
  doneTodoItemsLength(todos){
    let n = 0;
    for(let i=0;i<todos.length;i++){
      if(todos[i].done)
        n++;
    }
    return n;
  }

  render(){
    return <div className="summary__container">
        <p className="summary__text">
          {`${this.doneTodoItemsLength(this.props.todoItems)} / ${this.props.todoItems.length} tasks completed`}
        </p>
      </div>
  }
}


Summary.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo))
};


const mapStateToProps = state => ({
  todoItems: state.todos
});

export default connect(
  mapStateToProps,
  null
)(Summary);
