import React, { Component } from 'react';
import { connect } from "react-redux";
import { createTodo } from "./todoActions";





class AddTodo extends Component{

  addItem(){
      let description = document.getElementById("descriptionInput").value;
      if(description != "")
        this.props.createTodoItem(description);
      document.getElementById("descriptionInput").value = "";
  }

  render()
  {
    return (
      <div>
        <input type="text" id="descriptionInput" />
        <button onClick={() => this.addItem()}>Add</button>
      </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  createTodoItem: description => dispatch(createTodo(description))
});

export default connect(null, mapDispatchToProps)(AddTodo);
