import React, { useContext, useEffect, useState } from "react";
// JQUERY
import $ from "jquery";
// CONTEXT
import { Context } from "./Context";
// ROUTER
import { useNavigate } from "react-router-dom";
// GAME NAME FILE
import GameName from "../utilities/GameName";

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

  // IF THE PAGE IS FAVORITES THEN SET FILTEREDLIST TO FAVORITES AND CHANGE THE HEART COLOR TO FAV COLOR
  useEffect(() => {
    // PREPARE TYPE URL PART
    const fullURL = document.URL.split("/");
    const typeURL = fullURL[3];

    if (typeURL === "favorites") {
      setFilteredList(state.favorites);
      $(".heart").css({
        backgroundColor: "var(--redBackground)",
        color: "darkred",
      });
    }
  }, [state.favorites, state.url]);

  return (
    <>
      <div className="gamesDiv">
        {filteredList.length ? (
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
                      onClick={() => navigate(`/game/${nameReplace}`)}
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
                <Context.Provider value={{ state, dispatch, item }}>
                  <GameName />
                </Context.Provider>
              </div>
            );
          })
        ) : (
          <div>THERE ARE NO GAMES HERE</div>
        )}
      </div>
    </>
  );
};

export default GameDiv;
