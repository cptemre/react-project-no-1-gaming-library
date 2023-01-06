import React, { useContext, useEffect, useState } from "react";
import GameName from "../utilities/GameName";
// CONTEXT
import { Context } from "../utilities/Context";
// JQUERY
import $ from "jquery";
// HOOKS
import useFilter from "../hooks/useFilter";

const Game = () => {
  // VARIABLES
  const [item, setTheGame] = useState({});
  const { state, dispatch } = useContext(Context);
  const COLORS = ["var(--purpleShadow)", "white", "var(--lightBlue)"];
  const COLORS_HOVER = [
    "var(--hoverShadow)",
    "var(--seperatorBC)",
    "var(--hoverColor)",
  ];
  useEffect(() => {
    // PREPARE URL PART
    const url = document.URL.split("/");
    const lastURL = url[url.length - 1].replace(/_/g, " ");

    const game = state.list.filter((games) => games.names === lastURL);
    setTheGame(game[0]);
  }, [state.list]);
  // HIDE LOAD MORE
  useFilter(state, dispatch);
  // CSS FOR GAME NAME COMPONENT
  useEffect(() => {
    // FAV ICON CSS SET
    $(".gameName").css({
      transform: "scale(1)",
      position: "relative",
    });
    imgBorder();
  }, [item]);

  // FUNCTIONS

  // IMG CSS SET
  const imgBorder = () => {
    $.each($(".gameImgs"), function (i, val) {
      $(".gameImgs").eq(i).css("border-color", COLORS[i]);
    });
  };

  // IMG MOUSE ENTER
  const imgMouseEnter = (e) => {
    if ($(e.currentTarget).css("position") !== "absolute") {
      const i = e.currentTarget.id;
      $(e.currentTarget).css({
        borderColor: `${COLORS_HOVER[i]}`,
        transform: "scale(1.3)",
      });
    }
  };

  // IMG MOUSE LEAVE
  const imgMouseLeave = (e) => {
    const i = e.currentTarget.id;
    $(e.currentTarget).css({
      borderColor: `${COLORS[i]}`,
      transform: "scale(1)",
    });
  };

  // IMG MOUSE CLICK
  const imgClick = (e) => {
    $(e.currentTarget).children(".gameImgs").css({
      position: "absolute",
      top: "25vh",
      left: "10vw",
      maxWidth: "80vw",
      height: "50vh",
      zIndex: 10,
    });
    $(e.currentTarget).children(".closeDiv").css({
      position: "absolute",
      top: "30.4vh",
      right: "10.1vw",
      zIndex: 11,
      transform: "scale(1)",
    });
  };
  return (
    <div className="gamePage">
      {item && (
        <>
          <Context.Provider value={{ state, dispatch, item }}>
            <GameName />
          </Context.Provider>
          <div className="iframeDiv">
            <iframe
              src={item.iframe}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {item.names && (
            <div className="imgsDiv">
              {item.src.map((path, i) => (
                <div
                  key={path}
                  className="imgContainer"
                  onClick={(e) => imgClick(e)}
                >
                  <img
                    src={require(`../assets/imgs/games/${item.names}/${
                      i + 1
                    }.jpg`)}
                    alt={item.names}
                    className="gameImgs"
                    data-require={`../assets/imgs/games/${item.names}/${
                      i + 1
                    }.jpg`}
                    id={i}
                    onMouseEnter={(e) => imgMouseEnter(e)}
                    onMouseLeave={(e) => imgMouseLeave(e)}
                  />
                  <div className="closeDiv">&#x2718;</div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Game;
