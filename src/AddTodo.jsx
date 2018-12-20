import React, { Component } from 'react';
import { connect } from "react-redux";
import { createTodo } from "./todoActions";

class AddTodo extends Component{

  addItem(){
      let description = document.getElementById("descriptionInput").value;
      if(description !== "")
        this.props.createTodoItem(description);
      document.getElementById("descriptionInput").value = "";
  }

  handleEnter(event){
    if(event.keyCode===13){
      this.addItem();
    }
  }

  render()
  {
    return (
      <div className="input-group">
        <input className="form-control" type="text" id="descriptionInput" onKeyDown={(event) => this.handleEnter(event)} />
        <div className="input-group-btn">
          <button className="form-control  btn-success" id="addButton" onClick={() => this.addItem()}>Add</button>
        </div>
      </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  createTodoItem: description => dispatch(createTodo(description))
});

export default connect(null, mapDispatchToProps)(AddTodo);
