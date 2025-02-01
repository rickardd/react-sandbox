import { useCallback, useRef } from "react";

function useDebounce() {
  // Ref to store the timeout ID
  const timerRef = useRef<null | number>(null);

  const debounce = useCallback(<T>(delay: number, callback: (...args: T[]) => void) => {
    // Return a new function that will be debounced
    return (...args: T[]) => {
      // Clear the previous timeout if it exists
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      // Set a new timeout to call the callback after the specified delay
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }, []);

  return { debounce };
}

export default useDebounce;
