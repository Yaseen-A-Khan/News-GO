// const initailState = {
//   loading: "true",
//   query: "js",
//   nbPages: 0,
//   page: 0,
//   hits: [],
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEWSFEED":
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currEle) => currEle.objectId !== action.payload
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "PREV_PAGE":
      let pgnumDec = state.page - 1;
      if (pgnumDec <= 0) pgnumDec = 0;

      return {
        ...state,
        page: pgnumDec,
      };
    case "NEXT_PAGE":
      let pgnumInc = state.page + 1;
      if (pgnumInc >= state.nbPages) pgnumInc = 0;

      return {
        ...state,
        page: pgnumInc,
      };
    default:
      return state;
  }
};

export default reducer;
