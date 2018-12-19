export const createTodo = description => ({
  type: "CREATE_TODO",
  description
});

export const doTodo = id => ({
  type: "DO_TODO",
  id
})

export const undoTodo = id => ({
  type: "UNDO_TODO",
  id
})
