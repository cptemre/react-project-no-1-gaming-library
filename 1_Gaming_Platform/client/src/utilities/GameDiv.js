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
import useURL from "../hooks/useURL";
import useScroll from "../hooks/useScroll";

const GameDiv = () => {
  const { state, dispatch } = useContext(Context);
  const [filteredList, setFilteredList] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const paths = useURL(document.URL);
  const [length, setLength] = useState(state.filtered.length);
  // LINK
  const navigate = useNavigate();

  // HOOKS
  useFilter(state, dispatch, paths);
  useLength(state);
  useDispatch(state, dispatch, length, paths);
  useWidth(dispatch);
  useScroll();

  // FILTER THE LIST BY 10 ON PAGE LOAD

  useEffect(() => {
    setFilteredList(state.filtered);
    setLength(state.filtered.length);
  }, [state.filtered]);

  // SET WIDTH
  useEffect(() => {
    setWidth(state.width);
  }, [state.width]);

  return (
    <>
      <div className="gamesDiv">
        {filteredList.length ? (
          filteredList.map((item) => {
            if (item.names) {
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
            }
          })
        ) : (
          <div>THERE ARE NO GAMES HERE</div>
        )}
      </div>
    </>
  );
};

export default GameDiv;
