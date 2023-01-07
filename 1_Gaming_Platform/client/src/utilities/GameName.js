import React, { useContext, useEffect, useState } from "react";
// JQUERY
import $ from "jquery";
// CONTEXT
import { Context } from "./Context";
// ROUTER
const GameName = () => {
  const { state, dispatch, item } = useContext(Context);
  const [url, setUrl] = useState("");

  // SET URL
  useEffect(() => {
    // PREPARE TYPE URL PART
    const fullURL = document.URL.split("/");
    const typeURL = fullURL[3];
    setUrl(typeURL);
  }, []);
  // AT START CHECK IF FILTERED ITEMS ARE IN FAVS, IF SO CHANGE HEART COLOR
  useEffect(() => {
    // IF IT IS A GAME URL DONT LOOP
    if (url !== "game") {
      state.filteredTypeList.map((item, i) => {
        if (!state.favorites.includes(item)) {
          $(".heart").eq(i).css({
            backgroundColor: "var(--redBackground)",
            color: "darkred",
          });
        } else {
          $(".heart").eq(i).css({
            backgroundColor: "darkred",
            color: "var(--redBackground)",
          });
        }
      });
    } else {
      if (!state.favorites.includes(item)) {
        $(".heart").css({
          backgroundColor: "var(--redBackground)",
          color: "darkred",
        });
      } else {
        $(".heart").css({
          backgroundColor: "darkred",
          color: "var(--redBackground)",
        });
      }
    }
  }, [state.favorites, state.filteredTypeList, url]);

  // MOUSE ENTER HANDLE
  const mouseEnterHandle = (e) => {
    $(e.currentTarget).css("transform", "scale(1.2)");
  };
  // MOUSE LEAVE HANDLE
  const mouseLeaveHandle = (e) => {
    $(e.currentTarget).css("transform", "scale(1)");
  };
  // CHANGE HEART COLOR BY CHECKING IF IT IS IN FAVS
  const clickHandle = (e, item) => {
    dispatch({ type: "FAVORITES", payload: item });
    if (state.favorites.includes(item)) {
      $(e.currentTarget).css({
        backgroundColor: "var(--redBackground)",
        color: "darkred",
      });
    } else {
      $(e.currentTarget).css({
        backgroundColor: "darkred",
        color: "var(--redBackground)",
      });
    }
    console.log(e.currentTarget);
  };
  return (
    <>
      {item && (
        <div className="gameName">
          <div>{item.names}</div>
          <div
            id={item.names}
            className="heart"
            onMouseEnter={(e) => mouseEnterHandle(e)}
            onMouseLeave={(e) => mouseLeaveHandle(e)}
            onClick={(e) => clickHandle(e, item)}
          >
            &#9829;
          </div>
        </div>
      )}
    </>
  );
};

export default GameName;
