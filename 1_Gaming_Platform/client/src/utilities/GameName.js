import React, { useContext, useEffect } from "react";
// JQUERY
import $ from "jquery";
// CONTEXT
import { Context } from "./Context";
// ROUTER
const GameName = () => {
  const { state, dispatch, item } = useContext(Context);
  // AT START CHECK IF FILTERED ITEMS ARE IN FAVS, IF SO CHANGE HEART COLOR
  useEffect(() => {
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
  }, [state.favorites, state.filteredTypeList]);

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
    console.log(state.favorites);
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
