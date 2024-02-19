import React, { useContext } from "react";
import { StateContext } from "./stateprovider";

const Search = () => {
  const { query, searchPost } = useContext(StateContext);
  return (
    <div>
      <h1>News-Go</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input className="search-bar"
            type="text"
            value={query}
            onChange={(e)=> searchPost(e.target.value)}
            placeholder="seach here"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
