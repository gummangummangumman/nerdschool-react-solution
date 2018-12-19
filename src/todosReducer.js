import Todo from "./Todo";

//if you don't specify any todos
const defaultTodos = [];


const todosReducer = (todos = defaultTodos, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...todos,
        new Todo((todos.length + 1), action.description, false)];

    case "DO_TODO":
      let newArray = todos;
      for(let i=0;i<newArray.length;i++){
        if(newArray[i].id==action.id){
          console.log("found match ");
          newArray[i].done = true;
        }
      }
    console.log("do todo " + action.id);
      return [...newArray];

    case "UNDO_TODO":
    let nuArray = todos;
    nuArray.forEach(t => {
      if(t.id==action.id){
        console.log("found match");
        t.done = false;
      }
    });
    console.log("undo todo " + action.id);
      return [...nuArray];

    default:
      return todos;
  }
};

export default todosReducer;
