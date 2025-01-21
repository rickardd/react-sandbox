// Gotcha: import signal from /signals-react, not /signals
// It seems like we don't need to add signals-react-transform to the babel config
import { computed, effect, signal } from "@preact/signals-react";

// Declare outside of component
const count = signal(0);

export const Signal = () => {
  const increment = () => {
    count.value += 1;
  };

  const decrement = () => {
    count.value -= 1;
  };

  const title = computed(() => "Counter: " + count.value);

  effect(() => console.log(count.value));

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
