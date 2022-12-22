import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import $ from "jquery";

// HOOKS

const Load = () => {
  const { dispatch } = useContext(Context);
  const [filterID, setFilterID] = useState(10);

  useEffect(() => {
    dispatch({ type: "ID", payload: filterID });
  }, [filterID]);

  // CHECK IF FILTERED TYPE LIST AND GAMEDIV LENGTH IS SAME. IF SO CHANGE COLOR OF THE BUTTON

  const mousedownHandle = () => {
    setFilterID((old) => old + 10);
  };
  return (
    <div className="loadDiv">
      <button className="loadBtn" onMouseDown={mousedownHandle}>
        Load More
      </button>
    </div>
  );
};

export default Load;
