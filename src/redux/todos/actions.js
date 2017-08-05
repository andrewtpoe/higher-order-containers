let nextTodoId = 0;

export const createTodo = text => {
  return {
    type: 'CREATE_TODO',
    id: nextTodoId++,
    text,
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};
