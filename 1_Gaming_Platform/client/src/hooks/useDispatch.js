import { useEffect, useState } from "react";
import $ from "jquery";

const useDispatch = (state, dispatch) => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    dispatch({ type: "ID", payload: 10 });
  }, []);

  // SET FILTERED TYPE LIST
  useEffect(() => {
    if (state.url == "games") {
      dispatch({ type: "FILTERED_TYPE_LIST", payload: state.list });
    }
  }, [state.list]);

  // FILTER THE LIST BY 10 ON PAGE LOAD
  useEffect(() => {
    setFilteredList(state.filtered);
  }, [state.filtered]);

  // SET DOM LENGTH TO STATE
  useEffect(() => {
    dispatch({ type: "DOM_LENGTH", payload: $(".gameDiv").length });
  }, [filteredList]);
};

export default useDispatch;
