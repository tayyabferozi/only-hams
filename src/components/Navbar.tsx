import { useState } from "react";
import { HomeProps } from "../Home";

import { Connect } from "../Home";

const Navbar = (props: HomeProps) => {
  const [isSideNavActive, setIsSideNavActive] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavActive((prevState) => !prevState);
  };

  return (
    <>
      <div className={`nav-sm ${isSideNavActive ? "active" : ""}`}>
        <div className="close" onClick={toggleSideNav}>
          &times;
        </div>
        <a href="/">Home</a>
        <a href="/">Story</a>
        <a href="/">Hams</a>
        <a href="/">Team</a>
        <a href="/">Roadmap</a>
        <a href="/">FAQ</a>
        <div className="btn connect">
          {/* <img src="./assets/img/connect.png" alt="connect" /> */}
          <Connect {...props} />
        </div>
        <div className="btns">
          <a className="btn" href="/">
            <img src="./assets/img/twitter.png" alt="twitter" />
          </a>
          <a className="btn" href="/">
            <img src="./assets/img/discord.png" alt="discord" />
          </a>
          <a className="btn" href="/">
            <img src="./assets/img/youtube.png" alt="youtube" />
          </a>
        </div>
      </div>
      <div id="navbar">
        <div className="logo">
          <img src={"./assets/img/logo.svg"} alt="logo" />
        </div>
        <div className="hamburger d-lg-none d-block" onClick={toggleSideNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav d-lg-flex d-none">
          <a href="/">Home</a>
          <a href="/">Story</a>
          <a href="/">Hams</a>
          <a href="/">Team</a>
          <a href="/">Roadmap</a>
          <a href="/">FAQ</a>
          <div className="btn connect">
            {/* <img src="./assets/img/connect.png" alt="connect" /> */}
            <Connect {...props} />
          </div>
          <a className="btn" href="/">
            <img src="./assets/img/twitter.png" alt="twitter" />
          </a>
          <a className="btn" href="/">
            <img src="./assets/img/discord.png" alt="discord" />
          </a>
          <a className="btn" href="/">
            <img src="./assets/img/youtube.png" alt="youtube" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
