import { createContext, useState, useContext, useRef, memo } from "react";

// Create context
const CounterContext = createContext(null);

// Create a Provider Component
const CounterProvider = ({ children }) => {
  // Set up states
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Each state needs it's own updateFunction
  // This might feel like redundant
  const increment1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const decrement1 = () => {
    setCount1((prevCount) => prevCount - 1);
  };

  const increment2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const decrement2 = () => {
    setCount2((prevCount) => prevCount - 1);
  };

  return <CounterContext.Provider value={{ count1, increment1, decrement1, count2, increment2, decrement2 }}>{children}</CounterContext.Provider>;
};

const CounterComponent1 = () => {
  const { count1, increment1, decrement1 } = useContext(CounterContext);
  let renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div style={{ padding: "20px" }}>
      <p>Counter1: {count1}</p>
      <p>RenderCount: {renderCount.current}</p>
      <button onClick={increment1}>Increment</button>
      <button onClick={decrement1}>Decrement</button>
    </div>
  );
};

const CounterComponent2 = () => {
  const { count2, increment2, decrement2 } = useContext(CounterContext);
  let renderCount = useRef(0);

  renderCount.current += 1;
  return (
    <div style={{ padding: "20px" }}>
      <p>Counter2: {count2}</p>
      <p>RenderCount: {renderCount.current}</p>
      <button onClick={increment2}>Increment</button>
      <button onClick={decrement2}>Decrement</button>
    </div>
  );
};

// using memo doest help against unessesary re-renders.
const CounterComponentMemo = memo(() => {
  const { count2, increment2, decrement2 } = useContext(CounterContext);
  let renderCount = useRef(0);

  renderCount.current += 1;
  return (
    <div style={{ padding: "20px" }}>
      <p>
        <strong>Memorized component</strong>
      </p>
      <p>Counter2: {count2}</p>
      <p>RenderCount: {renderCount.current}</p>
      <button onClick={increment2}>Increment</button>
      <button onClick={decrement2}>Decrement</button>
    </div>
  );
});

const Output = () => {
  const { count1, count2 } = useContext(CounterContext);
  let renderCount = useRef(0);

  renderCount.current += 1;
  return (
    <div style={{ padding: "20px" }}>
      <p>Counter1: {count1}</p>
      <p>Counter2: {count2}</p>
      <p>RenderCount: {renderCount.current}</p>
    </div>
  );
};

export const Context = () => {
  return (
    <CounterProvider>
      <p>Use Context: Pros</p>
      <ul>
        <li>No third party library needed</li>
      </ul>
      <p>Use Context: Cons</p>
      <ul>
        <li>Causes re-renders to all components that uses the context, even though a state has changed that a component does not use.</li>
        <li>Needs a parent component. This means more boiler plate than e.g zustand </li>
        <li>We need to think of where this provider component should live, global app state or further down the tree.</li>
        <li>Syntax is quite verbose compared to e.g zustand</li>
      </ul>

      <p>
        <strong>Example:</strong> This shows how useContext causes unwanted re-renders as it updates all components using the context.
      </p>

      <p>We have 2 counter components that uses the same context, If one state updates this and the other component re'renders</p>

      <CounterComponent1 />
      <CounterComponent2 />
      <CounterComponentMemo />
      <Output />
    </CounterProvider>
  );
};
