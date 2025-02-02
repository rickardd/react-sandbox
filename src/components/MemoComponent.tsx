import { memo, useState } from "react";

export const MemoComponent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    // Setting the count should not re-render child (Todos) components
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((prev) => [...prev, "todo x"]);
  };

  return (
    <>
      <h2>React.memo</h2>
      <p>Purpose: React.memo is a higher-order component that is used to memoize a functional component. It prevents unnecessary re-renders of the component when its props have not changed.</p>
      <hr />

      <Todos title="ToDos" todos={todos} msg="ToDo: this renders when count is changing = performance issue and error prone" />
      <MemoWrappedTodos title="MemorizedToDos" todos={todos} msg="MemoWrappedTodos: only renders if ToDo's state has changes" />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={addTodo}>add todo</button>
      </div>
    </>
  );
};

const Todos = ({ title, todos, msg }) => {
  console.log(msg);
  return (
    <>
      <h2>{title}</h2>
      <p>This component should not render if the todos state has not changed. </p>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

// Memoize the Todos component
const MemoWrappedTodos = memo(Todos);
