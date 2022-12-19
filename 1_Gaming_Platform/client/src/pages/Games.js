import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import $ from "jquery";

const Games = () => {
  const { state } = useContext(Context);
  const [isLoaded, setIsLoaded] = useState(false);
  // GET ALL LIST
  useEffect(() => {
    setIsLoaded(true);
  }, [state.list]);

  const mouseenterHandle = (e) => {
    $(e.currentTarget)
      .siblings(".gameFig:eq(1)")
      .css("transform", "translateX(-3rem)");
    $(e.currentTarget)
      .siblings(".gameFig:eq(2)")
      .css("transform", "translateX(3rem)");

    $(e.currentTarget)
      .children(".gameImg")
      .css("transform", "scale(1.2)");
  };

  const mouseleaveHandle = (e) => {
    $(e.currentTarget)
      .siblings(".gameFig:eq(1), .gameFig:eq(2) ")
      .css("transform", "translateX(0)");

    $(e.currentTarget)
      .children(".gameImg")
      .css("transform", "scale(1)");
  };

  const figMouseenter = (e) => {
    $(e.currentTarget).css("z-index", 2);
    $(e.currentTarget).siblings().css("z-index", 1);
  };
  return (
    <div className="gamesDiv">
      {isLoaded &&
        state.list.map((item) => {
          return (
            <div
              key={item.id}
              className="gameDiv"
              onMouseEnter={(e) => mouseenterHandle(e)}
              onMouseLeave={(e) => mouseleaveHandle(e)}
            >
              {item.src.map((src, i) => {
                return (
                  <figure
                    key={`${item.id}figure${i}`}
                    className={`figure${i} gameFig`}
                  >
                    <img src={src} alt="" className="gameImg" />
                  </figure>
                );
              })}
              <div className="gameName">Name</div>
            </div>
          );
        })}
    </div>
  );
};

export default Games;
