import React, { useContext, useEffect, useState } from "react";
// JQUERY
import $ from "jquery";
// CONTEXT
import { Context } from "./Context";
// ROUTER
import { useNavigate } from "react-router-dom";
// GAME FUNCTIONS
import {
  divmouseenterHandle,
  divmouseleaveHandle,
  mouseenterHandle,
  mouseleaveHandle,
} from "./gameAnimations";

// HOOKS
import useFilter from "../hooks/useFilter";
import useLength from "../hooks/useLength";
import useDispatch from "../hooks/useDispatch";
import useWidth from "../hooks/useWidth";

const GameDiv = () => {
  const { state, dispatch } = useContext(Context);
  const [filteredList, setFilteredList] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  // LINK
  const navigate = useNavigate();

  // HOOKS
  useFilter(state, dispatch);
  useLength(state);
  useDispatch(state, dispatch);
  useWidth(dispatch);

  // FILTER THE LIST BY 10 ON PAGE LOAD

  useEffect(() => {
    setFilteredList(state.filtered);
  }, [state.filtered]);

  // SET WIDTH
  useEffect(() => {
    setWidth(state.width);
  }, [state.width]);

  // IF THE PAGE IS FAVORITES THEN SET FILTEREDLIST TO FAVORITES
  useEffect(() => {
    // PREPARE TYPE URL PART
    const fullURL = document.URL.split("/");
    const typeURL = fullURL[3];

    if (typeURL === "favorites") {
      setFilteredList(state.favorites);
    }
  }, [state.favorites]);

  // AT START CHECK IF FILTERED ITEMS ARE IN FAVS, IF SO CHANGE HEART COLOR
  useEffect(() => {
    filteredList.map((item, i) => {
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
  }, [state.favorites, filteredList]);
  // HEART FUNCTIONS
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
  };
  return (
    <>
      <div className="gamesDiv">
        {filteredList &&
          filteredList.map((item) => {
            const nameReplace = item.names.replace(/ /g, "_");
            return (
              <div
                key={item.id}
                id={nameReplace}
                className="gameDiv"
                onMouseEnter={(e) => divmouseenterHandle(e, width)}
                onMouseLeave={(e) => divmouseleaveHandle(e)}
              >
                {item.src.map((src, i) => {
                  return (
                    <figure
                      key={`${item.id}figure${i}`}
                      className={`figure${i} gameFig`}
                      onMouseEnter={(e) => mouseenterHandle(e, width)}
                      onMouseLeave={(e) => mouseleaveHandle(e, width)}
                      onClick={() => navigate(`/${nameReplace}`)}
                    >
                      <img
                        src={require(`../assets/imgs/games/${item.names}/${
                          i + 1
                        }.jpg`)}
                        alt=""
                        className="gameImg"
                      />
                    </figure>
                  );
                })}
                <div className="gameName">
                  <div>{item.names}</div>
                  <div
                    id={item.names}
                    className="heart"
                    onClick={(e) => clickHandle(e, item)}
                  >
                    &#9829;
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default GameDiv;
