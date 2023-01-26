import React, { useContext, useEffect, useState } from "react";
// NAME COMPONENT
import GameName from "../utilities/GameName";
// IMG COMPONENT
import GameImgs from "../utilities/GameImgs";
// CONTEXT
import { Context } from "../utilities/Context";
// HOOKS
import useFilter from "../hooks/useFilter";
import useURL from "../hooks/useURL";
// ROUTER
import { Link } from "react-router-dom";
// ERROR
import Error from "../pages/Error";

const Game = () => {
  // VARIABLES
  const [item, setTheGame] = useState({});
  // ITEM KEYS
  const [keys, setKeys] = useState([]);
  // UNWANTED ITEM KEYS
  const [noKeys, setNoKeys] = useState(["id", "src", "iframe", "names"]);
  // CONTEXT
  const { state, dispatch } = useContext(Context);
  const paths = useURL(document.URL);
  useEffect(() => {
    // PREPARE URL PART
    if (paths[3]) {
      const game = state.list.filter((games) => games.names === paths[3]);
      setTheGame(game[0]);
    }
  }, [state.list, paths]);

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

  return (
    <div className="gamePage">
      {item ? (
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
                          ? item[key].map((element) => {
                              let innerHtml;
                              if (key !== "names") {
                                innerHtml = element
                                  .toLowerCase()
                                  .replace(/ /g, "_");
                              }
                              return (
                                <Link
                                  key={`link${innerHtml}`}
                                  to={`/${key}/${innerHtml}`}
                                  target="_blank"
                                >
                                  <p className="tableLinks">{element}</p>
                                </Link>
                              );
                            })
                          : Object.keys(item[key]).map((link) => {
                              return (
                                <a
                                  key={item[key][link]}
                                  href={item[key][link]}
                                  target="_blank"
                                >
                                  <p className="tableLinks">{link}</p>
                                </a>
                              );
                            })}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </>
      ) : <Error/>}
    </div>
  );
};

export default Game;
