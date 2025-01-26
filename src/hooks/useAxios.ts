import { axios } from "@/lib/axiso";
import logger from "@/lib/logger";
import type { AxiosRequestConfig } from "axios";
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
const useFetch = <T>(config: AxiosRequestConfig) => {
  const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(reducer, {
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios<T>(config);
        dispatch({ type: "data", data });
      } catch (error: unknown) {
        logger.error(error, "useFetch");
        dispatch({ type: "error", error });
      }
    };

    fetchData().catch(logger.error);
  }, [config]);

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
