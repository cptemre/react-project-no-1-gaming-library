import React, { useContext, useEffect, useState } from "react";
// NAME COMPONENT
import GameName from "../utilities/GameName";
// IMG COMPONENT
import GameImgs from "../utilities/GameImgs";
// CONTEXT
import { Context } from "../utilities/Context";
// HOOKS
import useFilter from "../hooks/useFilter";
// ROUTER
import { useNavigate } from "react-router-dom";
// JQUERY
import $ from "jquery";

const Game = () => {
  // VARIABLES
  const [item, setTheGame] = useState({});
  // ITEM KEYS
  const [keys, setKeys] = useState([]);
  // UNWANTED ITEM KEYS
  const [noKeys, setNoKeys] = useState(["id", "src", "iframe"]);
  // CONTEXT
  const { state, dispatch } = useContext(Context);
  // NAVIGATE
  const navigate = useNavigate();

  useEffect(() => {
    // PREPARE URL PART
    const url = document.URL.split("/");
    const lastURL = url[url.length - 1].replace(/_/g, " ");

    const game = state.list.filter((games) => games.names === lastURL);
    setTheGame(game[0]);
  }, [state.list]);

  // SET ITEM KEYS
  useEffect(() => {
    let tempKeys = [];
    // PUSH KEYS
    for (const key in item) {
      tempKeys.push(key);
    }
    // FILTER UNWANTED KEYS
    for (let i = 0; i < noKeys.length; i++) {
      tempKeys = tempKeys.filter((temp) => temp !== noKeys[i]);
    }
    setKeys(tempKeys);
  }, [item]);

  // HIDE LOAD MORE
  useFilter(state, dispatch);

  // CONTINUE TO CREATE A LINK FROM HERE
  const trLink = (e, key) => {
    let innerHtml = $(e.currentTarget).html();
    let newKey = $(e.currentTarget).html();

    if (key !== "names") {
      innerHtml = innerHtml.toLowerCase().replace(" ", "");
      console.log(innerHtml);
      navigate(`/${key}/${innerHtml}`);
    }
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
            {item.names && (
              <div className="tempImgsDiv">
                <Context.Provider value={{ item }}>
                  <GameImgs />
                </Context.Provider>
              </div>
            )}
          </div>
          {item.names && (
            <div className="imgsDiv">
              <Context.Provider value={{ item }}>
                <GameImgs />
              </Context.Provider>
            </div>
          )}
          <table>
            <tbody>
              {keys.map((key) => {
                let newKey = key;
                if (!noKeys.includes(item)) {
                  // DELETE S FROM END
                  if (key[key.length - 1] === "s") {
                    newKey = key.slice(0, key.length - 1);
                  }

                  return (
                    <tr key={newKey}>
                      <th>{newKey}</th>
                      <td>
                        {typeof item[key] !== "object"
                          ? item[key]
                          : key !== "links"
                          ? item[key].map(
                              (
                                element // CONTINUE TO SET ELEMENTS
                              ) => (
                                <tr onClick={(e) => trLink(e, key)}>
                                  {element}
                                </tr>
                              )
                            )
                          : "no"}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Game;
