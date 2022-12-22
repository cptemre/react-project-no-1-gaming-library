import { useState, useEffect } from "react";

const useWidth = (dispatch) => {
  const [width, setWidth] = useState(window.innerWidth);

  // GET WIDTH VALUE
  useEffect(() => {
    window.addEventListener("resize", sizing);
    dispatch({type: 'WIDTH', payload: width})
    return () => {
      window.removeEventListener("resize", sizing);
    };
  }, [width]);

  const sizing = () => {
    setWidth(window.innerWidth);
  };
};

export default useWidth;
