import PropTypes from 'prop-types';
import React from 'react';

import Card from 'blocks/Card';

import Todo from './Todo';

function TodoList({ todos, onTodoClick }) {
  return (
    <Card.Item>
      <ul>
        {todos.map(todo =>
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />,
        )}
      </ul>
    </Card.Item>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
