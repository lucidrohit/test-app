import { useEffect, useState } from "react";

export default function useThrottledState<T>(
  ref: React.MutableRefObject<T>,
  throttleTime: number
) {
  const [state, setState] = useState(ref.current);

  useEffect(() => {
    const interval = setInterval(() => {
      setState({ ...ref.current });
    }, throttleTime);
    return () => {
      clearInterval(interval);
    };
  }, [ref, throttleTime]);

  return state;
}
