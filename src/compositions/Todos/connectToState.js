import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from 'redux/filter/actions';
import { createTodo, toggleTodo } from 'redux/todos/actions';

const connectToState = WrappedComponent => {
  function filterVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_ALL':
        return todos;
      default:
        return todos;
    }
  }

  function Container(props) {
    return <WrappedComponent {...props} />;
  }

  Container.propTypes = {
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

  function mapStateToProps(state) {
    return {
      filter: state.filter,
      todos: filterVisibleTodos(state.todos, state.filter),
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      createTodo: value => dispatch(createTodo(value)),
      onFilterClick: filter => dispatch(setFilter(filter)),
      onTodoClick: id => dispatch(toggleTodo(id)),
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
};

export default connectToState;
