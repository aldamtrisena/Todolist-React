const initState = {
  todos: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TODOS":
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case "DELETE_TODOS":
      const newTodo = state.todos.filter((el) => el.id !== action.payload);

      return {
        ...state,
        todos: newTodo,
      };
    default:
      return state;
  }
}
