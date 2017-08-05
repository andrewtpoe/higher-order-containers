import PropTypes from 'prop-types';
import React from 'react';

function Todo({ completed, onClick, text }) {
  return (
    <li
      onClick={onClick}
      style={{
        cursor: 'pointer',
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
