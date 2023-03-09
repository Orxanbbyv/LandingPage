import React from "react";
import { useState } from "react";
import HeroImg from "./hero_img.png";
import Search from "./search.svg";
import "./hero.scss";
const Hero = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="hero">
      <div className="text">
        <h1>
          We’re reinventing <br />
          apartment living
        </h1>
        <p>
          Say goodbye to being trapped in a lease. <br />
          Landing members have access to thousands <br />
          of apartments with flexible leases.
        </p>
      </div>

      <div className="imghero">
        <img src={HeroImg} alt="img" />
      </div>
      <div className="search">
        <div className="search-text">
          <span>
            <p>
              Location <br />
              <span>
                <br /> Where to ?
              </span>
            </p>
          </span>
          <span>
            <p>
              Dates <br />
              <span>
                <br /> How long?
              </span>
            </p>
          </span>
        </div>
        <button onClick={handleClick}>
          <img src={Search} alt="svg" />
          Search
          {showSearch && <input type="text" placeholder="Search..." />}
        </button>
      </div>
    </div>
  );
};

export default Hero;
