import React, { useState, useContext, createContext, useRef } from "react";
import { create } from "zustand";

// Zustand store
const useStore = create((set) => ({
  data: "Initial Zustand Data",
  setData: (newData) => set({ data: newData }),
}));

// Context
const MyContext = createContext("Default Context Value");

// // Child 1: Using Props
const Child1 = ({ myPropData }) => {
  return <div>Child 1 (Props): {myPropData}</div>;
};

// Child 2: State Lifting
const Child2 = ({ setLiftedData }) => {
  return (
    <div>
      <h2>Child 2 (State Lifting)</h2>
      <button onClick={() => setLiftedData("Updated Lifted Data")}>Update Lifted Data</button>
    </div>
  );
};

// Child 3: Using Refs
const Child3 = React.forwardRef((props, ref) => {
  const callChildMethod = () => {
    alert("Child 3 Method Called!");
  };
  React.useImperativeHandle(ref, () => ({
    callChildMethod,
  }));
  return <div>Child 3 (Refs)</div>;
});

// Child 4: Using Context API
const Child4 = () => {
  const contextData = useContext(MyContext);
  return <div>Child 4 (Context API): {contextData}</div>;
};

// Child 5: Using Zustand
const Child5 = () => {
  const { data } = useStore();
  return <div>Child 5 (Zustand): {data}</div>;
};

const Parent = () => {
  const [liftedData, setLiftedData] = useState("Lifted Data");
  const childRef = useRef();
  const { data, setData } = useStore();

  return (
    <MyContext.Provider value={liftedData}>
      <Child1 myPropData={"prop data"} />
      <Child2 setLiftedData={setLiftedData} />
      <Child3 ref={childRef} />
      <Child4 />
      <Child5 />
      <button onClick={() => childRef.current.callChildMethod()}>Call Child Method</button>
      <button onClick={() => setData("Updated Zustand Data")}>Update Zustand Data</button>
    </MyContext.Provider>
  );
};

export const PassingData = () => {
  return (
    <div>
      <h1>Data Passing Example</h1>
      <p>Here are examples of different methods of passing data.</p>
      <p>
        - **Props**: (Child1) <br />
      </p>
      <p>
        - **State Lifting**: (Child2) <br />
      </p>
      <p>
        - **Context API**: (Child1` and `Child4) <br />
      </p>
      <p>
        - **Refs**: (Child3) <br /> - **Method**: Uses `React.forwardRef` and `useImperativeHandle` to expose a method that can be called from the `Parent`.
      </p>
      <p>
        - **Zustand**: (Child5) <br /> - **Method**: Accesses and displays the global state (`data`) managed by Zustand, and `Parent` updates the Zustand state.
      </p>
      <Parent />
    </div>
  );
};
