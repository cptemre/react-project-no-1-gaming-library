import { useState, useEffect } from "react";
import $ from "jquery";

const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, [scroll]);

  const scrollHandle = () => {
    setScroll(window.scrollY);
    if (window.scrollY !== 0) {
      $("nav").css("background-color", "rgb(6, 20, 45)");
    } else {
      $("nav").css("background-color", "black");
    }
  };
};

export default useScroll;
