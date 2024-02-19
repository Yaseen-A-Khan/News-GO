import React, { useReducer, useEffect } from "react";
import reducer from "./reducer";

const initialState = {
  loading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

let API = "https://hn.algolia.com/api/v1/search?";

const StateContext = React.createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      dispatch({
        type: "GET_NEWSFEED",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  const searchPost = (seachQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: seachQuery });
  };

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <StateContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
