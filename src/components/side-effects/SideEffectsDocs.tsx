export const SideEffectsDocs = () => {
  return (
    <div>
      <h3>Order of events</h3>

      <ul>
        <li>Rerender component</li>
        <li>Run the effect</li>
        <li>
          If dependency has changed or component unmounts
          <ul>
            <li>Return statement runs</li>
            <li>Then the effect</li>
            <li>Return statement will not run unless dependency has changed</li>
          </ul>
        </li>
      </ul>

      <h3>Good to know</h3>

      <p>All useEffects will always run once (with or without a dependency) after the component has rendered</p>

      <p>
        <strong>Api calls</strong> should live in useEffects
      </p>

      <p>
        State updates in useEffect are asynchronous. Use the functional form of the state setter (e.g., <strong>setState(prev =&gt; newValue))</strong> to get current state.
      </p>

      <p>
        Consider using <strong>AbortController</strong> to cancel ongoing requests when the component unmounts or when the effect re-runs. This helps prevent memory leaks and state updates on
        unmounted components.
      </p>

      <p>
        <strong>React Strict Mode:</strong> Be aware that in React's Strict Mode , effects may run twice in development to help identify side effects. This does not happen in production.
      </p>

      <br />
      <br />

      <h3>Things to Watch Out For</h3>
      <p>Stale Closures: Be cautious of stale closures when using state or props inside the effect. If you reference them directly, they may not reflect the latest values.</p>
      <p>
        Unnecessary Re-renders: <strong>Avoid including functions or objects in the dependency array</strong> unless they are memoized, as this can lead to unnecessary re-renders.
      </p>
      <p>
        <strong>Race Conditions:</strong> When dealing with asynchronous operations, be aware of race conditions where the order of operations may lead to unexpected results.
      </p>
      <p>
        Component Unmounting: Always ensure that your cleanup logic is robust to handle cases where the <strong>component may unmount before an effect completes</strong>.
      </p>
    </div>
  );
};
