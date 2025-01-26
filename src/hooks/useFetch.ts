import logger from "@/lib/logger";
import { type Reducer, useEffect, useReducer } from "react";

type State<T> = {
  loading: boolean;
  data: T | null;
  error: unknown;
};

type Action<T> =
  | {
      type: "data";
      data: T;
    }
  | {
      type: "error";
      error: unknown;
    };
const useFetch = <T>(url: string) => {
  const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(reducer, {
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = (await response.json()) as T;
        dispatch({ type: "data", data });
      } catch (error: unknown) {
        logger.error(error, "useFetch");
        dispatch({ type: "error", error });
      }
    };

    fetchData().catch(logger.error);
  }, [url]);

  return state;
};

function reducer<T>(_: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "data":
      return { loading: false, data: action.data, error: null };
    case "error":
      return { loading: false, data: null, error: action.error };
  }
}

export default useFetch;
