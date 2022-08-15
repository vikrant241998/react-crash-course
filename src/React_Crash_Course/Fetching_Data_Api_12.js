import React, { useState, useEffect } from "react";

const Fetching_Data_Api_12 = () => {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState("");
  const [idFromButtonClick, setidFromButtonClick] = useState("");

  const handleClick = () => {
    setidFromButtonClick(id);
  };


  useEffect(() => {
    const getUrl = `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`;
    fetch(getUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log("Data result", result);
        setPosts(result);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, [idFromButtonClick]);

  
  return (
    <div>
      <input
        type="text"
        value={id}
        placeholder="Enter id Number Here"
        onChange={(e) => setId(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Get Data{" "}
      </button>
      {<div>{posts.title}</div>}
    </div>
  );
};

export default Fetching_Data_Api_12;
