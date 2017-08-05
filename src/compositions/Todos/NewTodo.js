import PropTypes from 'prop-types';
import React from 'react';

import Button from 'blocks/Button';
import Card from 'blocks/Card';

function NewTodo({ createTodo }) {
  let input;

  return (
    <Card.Item>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          createTodo(input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </Card.Item>
  );
}

NewTodo.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default NewTodo;
