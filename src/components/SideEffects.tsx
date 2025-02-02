import { useEffect, useState } from "react";

export const SideEffects = ({ foo = true }) => {
  const [count, setCount] = useState(1);
  const [intervalCount, setIntervalCount] = useState(0);
  const [userId, setUserId] = useState(0);

  // ----------- Empty Dependency [] ------------

  /**
   * Runs once after component has rendered the first time
   */
  useEffect(() => {
    console.log("useEffect runs after component has been rendered once");

    return () => {
      console.log("unmounting effect");
    };
  }, []);

  // ----------- With unchanged dependency ------------

  /**
   * [] vs [foo] as dependencies
   * - useEffect will always run once, event though foo never changes
   * - This is why in this example [] and [foo] will behave the same.
   * - return statement will not run unless foo is changing.
   * - Return statement will only run when component unmounts
   */
  useEffect(() => {
    console.log("useEffect foo", foo);

    return () => {
      console.log("unmounting effect foo");
    };
  }, [foo]);

  // ----------- With state dependencies ------------

  /**
   * Clicking the button will for every click
   * - First rerender the component
   * - Then run the effect
   * - Then then clear/unmount the effect
   */
  useEffect(() => {
    console.log("useEffect count init");

    return () => {
      console.log("unmounting useEffect count");
    };
  }, [count]);

  const increment = () => {
    // State updates before useEffect and triggers component re-render
    setCount(count + 1);
  };

  // ----------- INTERVALS with MEMORY LEAKS ------------

  /**
   * Intervals and memory leaks
   * This example will create a new interval thread in memory every second.
   */
  /** 
  useEffect(() => {
    // This creates a new interval in memory each time the effect runs.
    // If the effect runs multiple times without cleaning up the previous interval,
    // we will end up with multiple intervals running simultaneously.
    const intervalId = setInterval(() => {
      // React batches state updates, but using the current value of `intervalCount`
      // directly can lead to stale state issues.
      // If `intervalCount` is captured in the closure, it will always refer to the
      // value it had when the interval was created, not the updated value.
      setIntervalCount(intervalCount + 1);
      console.log("Count:", intervalCount); // This will log the stale value which is count = 1
    }, 1000);

    // No cleanup function to clear the interval
    // In other words, all interval will run even if component is unmounting
  }, [intervalCount]);
   */

  // ----------- INTERVALS without MEMORY LEAKS ------------

  /**
   * How to deal with intervals properly
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("useEffect timeout", intervalCount);
      // Use callback function when setting value to get the correct and current state
      setIntervalCount((previous) => previous + 1);
    }, 1000);

    // Clear the interval before the next effect cycle starts or when the component unmounts.
    // This means that the interval will run for 1 second, and then if intervalCount changes,
    // the current interval will be cleared and a new one will be set up.
    return () => {
      clearInterval(intervalId);
      console.log("unmounting useEffect interval");
    };
  }, [intervalCount]);

  // ----------- Abort previous API call ------------

  /**
   * Example of how we can abort previous calls if we start a new fetch before the previous started.
   * Throttle the network to see how we can fetch new user many times while only the last will be fetched.
   */
  useEffect(() => {
    // Create an instance of AbortController
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        // Insert signal
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.log(err.message);
        }
      } finally {
        console.log("request finished");
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Abort current the fetch request if any
      console.log("Cleanup: Fetch request aborted");
    };
  }, [userId]);

  console.log("Component rendering");

  return (
    <div>
      <h3>Good to know</h3>

      <p>All useEffects will always run once (with or without a dependency) after the component has rendered</p>

      <p>
        The return statement runs <br /> - Before the Component Unmounts <br /> - Before the effect runs again because a dependency has change.
      </p>
      <p>Api calls should live in useEffects</p>
      <p>State updates in useEffect are asynchronous. Use the functional form of the state setter (e.g., setState(prev =&gt; newValue)) to get current state.</p>

      <p>
        Consider using AbortController to cancel ongoing requests when the component unmounts or when the effect re-runs. This helps prevent memory leaks and state updates on unmounted components.
      </p>

      <p>
        React Strict Mode: <strong>Be aware that in React's Strict Mode</strong> , effects may run twice in development to help identify side effects. This does not happen in production.
      </p>

      <br />
      <br />

      <h3>Things to Watch Out For</h3>
      <p>Stale Closures: Be cautious of stale closures when using state or props inside the effect. If you reference them directly, they may not reflect the latest values.</p>
      <p>Unnecessary Re-renders: Avoid including functions or objects in the dependency array unless they are memoized, as this can lead to unnecessary re-renders.</p>
      <p>Race Conditions: When dealing with asynchronous operations, be aware of race conditions where the order of operations may lead to unexpected results.</p>
      <p>Component Unmounting: Always ensure that your cleanup logic is robust to handle cases where the component may unmount before an effect completes.</p>

      <button onClick={increment}>Increment</button>
      <button onClick={() => setUserId((prevUserId) => prevUserId + 1)}>Get next user</button>
    </div>
  );
};
