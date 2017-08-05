import PropTypes from 'prop-types';
import React from 'react';

import Card from 'blocks/Card';

import Footer from './Footer';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

import connectToState from './connectToState';

function Todos(props) {
  return (
    <Card name="todos">
      <Card.Item>
        <h1>ToDo App (with a Higher Order Container)</h1>
      </Card.Item>
      <NewTodo createTodo={props.createTodo} />
      <TodoList onTodoClick={props.onTodoClick} todos={props.todos} />
      <Footer filter={props.filter} onFilterClick={props.onFilterClick} />
    </Card>
  );
}

Todos.propTypes = {
  createTodo: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connectToState(Todos);
