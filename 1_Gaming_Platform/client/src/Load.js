import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
const Load = () => {
  const { state, dispatch } = useContext(Context);
  const [filterID, setFilterID] = useState(10);

  useEffect(() => {
    setFilterID(10);
  }, []);

  useEffect(() => {
    const filter = state.list.filter((item) => item.id < filterID);
    dispatch({ type: "FILTERED", payload: filter });
  }, [state.id]);

  const mousedownHandle = () => {
    setFilterID((old) => old + 10);
    dispatch({ type: "ID", payload: filterID });
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
