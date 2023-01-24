import React, { useContext, useEffect, useState } from "react";
// JQUERY
import $ from "jquery";
// CONTEXT
import { Context } from "./Context";
// HOOKS
import useURL from "../hooks/useURL";

const GameName = () => {
  const { state, dispatch, item } = useContext(Context);
  const [url, setUrl] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const paths = useURL(document.URL);

  // SET URL
  useEffect(() => {
    // PREPARE TYPE URL PART
    if (paths[0][3]) {
      setUrl(paths[0][3]);
    }
  }, [paths]);

  // AT START CHECK IF FILTERED ITEMS ARE IN FAVS, IF SO CHANGE HEART COLOR
  useEffect(() => {
    // IF IT IS A GAME URL DONT LOOP
    if (url !== "game" && url !== "favorites") {
      state.filteredTypeList.map((item, i) => {
        if (
          !state.favorites.includes(
            state.favorites.find((game) => game.id === item.id)
          )
        ) {
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
    } else if (url === "favorites") {
      $(".heart").css({
        backgroundColor: "darkred",
        color: "var(--redBackground)",
      });
    } else {
      if (
        !state.favorites.includes(
          state.favorites.find((game) => game.id === item.id)
        )
      ) {
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
  }, [
    JSON.parse(localStorage.getItem("favorites")),
    state.favorites,
    state.filteredTypeList,
    url,
  ]);
  // SET URL
  useEffect(() => {
    console.log(state.favorites);
    if (state.favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
      console.log(1);
    } else {
      console.log(JSON.parse(localStorage.getItem("favorites")));
    }
  }, [isClicked]);
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
    console.log(state.favorites.filter((game) => game.id === item.id));
    if (state.favorites && state.favorites.includes(item)) {
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
    setIsClicked(!isClicked);
    console.log(state.favorites);
    console.log(localStorage);
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
