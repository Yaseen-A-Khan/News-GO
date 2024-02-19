import React, { useContext } from "react";
import { StateContext } from "./stateprovider";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useContext(StateContext);
  return (
    <div>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button
          onClick={() => {
            getNextPage();
          }}
        >NEXT</button>
      </div>
    </div>
  );
};

export default Pagination;
