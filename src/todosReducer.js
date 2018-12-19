import Todo from "./Todo";

//if you don't specify any todos
const defaultTodos = [];


const todosReducer = (todos = defaultTodos, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...todos,
        new Todo(Math.floor(Math.random() * 9999999999), action.description, false)];

    case "DO_TODO":
      let doArray = todos;
      for(let i=0;i<doArray.length;i++){
        if(doArray[i].id==action.id){
          doArray[i].done = true;
        }
      }
      return [...doArray];

    case "UNDO_TODO":
    let undoArray = todos;
    undoArray.forEach(t => {
      if(t.id==action.id){
        t.done = false;
      }
    });
      return [...undoArray];

      case "DELETE_TODO":
      let deleteArray = todos;
      for (var i = deleteArray.length; i--;) {
        if (deleteArray[i].id === action.id) {
            deleteArray.splice(i, 1);
        }
      }
      return [...deleteArray];

    default:
      return todos;
  }
};

export default todosReducer;
