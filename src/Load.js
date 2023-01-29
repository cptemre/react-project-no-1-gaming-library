import React, { useContext, useEffect, useState } from "react";
import { Context } from "./utilities/Context";

const Load = () => {
  const { state,dispatch } = useContext(Context);
  const [filterID, setFilterID] = useState(10);

  useEffect(() => {
    dispatch({ type: "ID", payload: filterID });
  }, [filterID,state.filteredTypeList, state.domLength]);

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
