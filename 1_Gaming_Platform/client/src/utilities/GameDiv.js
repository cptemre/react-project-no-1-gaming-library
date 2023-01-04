import React, { useContext, useEffect, useState } from "react";
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
                onClick={() => navigate(`/${nameReplace}`)}
              >
                {item.src.map((src, i) => {
                  return (
                    <figure
                      key={`${item.id}figure${i}`}
                      className={`figure${i} gameFig`}
                      onMouseEnter={(e) => mouseenterHandle(e, width)}
                      onMouseLeave={(e) => mouseleaveHandle(e, width)}
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
                <div className="gameName">{item.names}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default GameDiv;
