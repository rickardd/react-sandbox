import { memo, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const boxStyle = { border: "1px solid #ddd", padding: "0px 12px", marginBottom: "12px" };

const markdownContent = `
- \`memo()\` - this is the only way to prevent child components to re-render when parent re-renders.
- \`memo()\` - Is a higher-order component that memoizes a functional component. It prevents the component from re-rendering if its props have not changed.
- \`useMemo() \` - useMemo is used to memoize the result of a computation. It helps avoid expensive calculations on every render by caching the result and only recalculating it when its dependencies change.
- \`useMemo() and useCallback\` - cannot prevent child components from re-rendering
- \`useMemo() and useCallback\` - use to prevent e.g useEffect to render every time
- \`useMemo() and useCallback\` - use to prevent heavy calculation from re calculate on every render
- \`useMemo() and useCallback\` - most often needed if we need to a value or a method in a dependancy array e.g useEffect.
- \`useMemo() and useCallback\` - Probably not needed in react 19
`;

const ChildComponent = ({ bigObject, title }) => {
  const renderCount = useRef(0);
  console.log("childComponent  bigObject", bigObject);

  renderCount.current += 1;

  return (
    <p>
      childComponent: using <strong>{title}</strong> : {renderCount.current}
    </p>
  );
};

const ChildComponentMemo = memo(ChildComponent);

const Test = ({ title }) => {
  // Component renders every time parent re-renders
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <p>
      Test: using <strong>{title}</strong> : {renderCount.current}
    </p>
  );
};

// Component does not re-render when parent updates
const TestMemo = memo(Test);

export const MemoAndCallbackHooks = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // --- Simple object
  const bigObject = { foo: 1, bar: 2, count: count };

  useEffect(() => {
    console.log("bigObject", "runs on every render");
  }, [bigObject]);

  // --- Memorized object
  const bigObjectMemo = useMemo(() => {
    console.log("bigObjectMemo", "only runs when count has changed");
    return { foo: 1, bar: 2, count: count };
  }, [count]);

  useEffect(() => {
    console.log("only runs if count has changed");
  }, [bigObjectMemo]);

  return (
    <>
      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          count up 1
        </button>
        <button
          onClick={() => {
            setCount1((prev) => prev + 1);
          }}
        >
          Trigger re-render
        </button>
        <p>Count: {count}</p>

        <h3>Child Rendering Tests</h3>
        <div style={boxStyle}>
          <ChildComponent bigObject={bigObject} title={""}></ChildComponent>
          <p>Takes a normal object as prop. This will always re-render if parent does</p>
        </div>
        <div style={boxStyle}>
          <ChildComponent bigObject={bigObjectMemo} title={"useMemo()"}></ChildComponent>
          <p>Takes a memorized object (useMemo()) as prop. This will always re-render if parent does</p>
        </div>
        <div style={boxStyle}>
          <ChildComponentMemo bigObject={bigObject} title={"memo()"}></ChildComponentMemo>
          <p>
            Component wrapped in memo() and takes a <strong>normal</strong> object as prop. This will always re-render if parent does.
            <strong>Why?</strong> Because the object has a new reference on every render the memo() understand this as a property change.
          </p>
        </div>
        <div style={boxStyle}>
          <ChildComponentMemo bigObject={bigObjectMemo} title={"memo() and useMemo()"}></ChildComponentMemo>
          <p>
            Component wrapped in memo() and takes a memorized object (useMemo()) as prop. This will <strong>not</strong> re-render unless prop has changed.
          </p>
          <p>
            <strong>In other words</strong> We need to combine useMemo() and memo() to prevent unessesary re-renders of child components.
          </p>
        </div>
        <div style={boxStyle}>
          <Test title=""></Test>
          <p>
            <strong>Simple test component</strong> with no dynamic props to illustrate that it always re-renders if parent does
          </p>
        </div>
        <div style={boxStyle}>
          <TestMemo title="memo()"></TestMemo>
          <p>
            <strong>Simple test component</strong> does only render once.
          </p>
        </div>
        <div style={boxStyle}></div>
      </div>
    </>
  );
};
