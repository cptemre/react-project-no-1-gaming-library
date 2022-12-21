import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
const Load = () => {
  const { state, dispatch } = useContext(Context);
  const [filterID, setFilterID] = useState(10);

  useEffect(() => {
    const url = document.URL.split("/");
    console.log(url[url.length - 1]);
    const filter = state.list.filter((item) => item.id < filterID);
    dispatch({ type: "FILTERED", payload: filter });
  }, [filterID]);

  const mouseenterHandle = () => {
    setFilterID((old) => old + 10);
    console.log(filterID);
  };
  return (
    <div className="loadDiv">
      <button className="loadBtn" onMouseDown={mouseenterHandle}>
        Load More
      </button>
    </div>
  );
};

export default Load;
