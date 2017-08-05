# Redux Todo app exploring Higher Order Containers

This project refactors the (extremely) basic ToDo app found [in the Redux docs](http://redux.js.org/docs/basics/ExampleTodoList.html) to use a structure that will scale considerably better.

Of significance in this project:
  - Co-locates component & container files in a new folder, `src/compositions`.
  - Uses a `connectToState` HOC (Higher Order Container) to map state values and action creators to props.
  - Demonstrates a very basic adaptation of the BEM principles for display only components. There are no modifiers applied to the blocks and elements as that is beyond the purpose of this example.
