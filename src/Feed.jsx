import React from "react";
import { useContext } from "react";
import { StateContext } from "./stateprovider";

const Feed = () => {
  const { hits, loading, removePost } = useContext(StateContext);

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div className="feed-div">
      {hits.map((currPost) => {
        const { author, title, objectID, updated_at, url } = currPost;

        let updatedTime = updated_at.split(":");
        let updatedDate = updatedTime[0].split("-");
        let trueDate = updatedDate[2].split("");
        updatedDate = `${trueDate[0]}${trueDate[1]}-${updatedDate[1]}-${updatedDate[0]}`;

        return (
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
              By <span>{author}</span> | <span>{updatedDate}</span>
            </p>
            <div className="card-button">
              <a href={url} target="_blank">
                {/*can add an icon for reading more*/}
                Read More
              </a>
              <a href="#" onClick={() => removePost(objectID)}>
                {/*can add an icon for removing*/}
                Remove
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
