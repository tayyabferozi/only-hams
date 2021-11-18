import { useState } from "react";
import { HomeProps } from "../Mint";

import { Connect } from "../Connect";

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
        <a href="#hero">Home</a>
        <a href="#about">Story</a>
        <a href="#NFT">Hams</a>
        <a href="#team">Team</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#FAQ">FAQ</a>
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
          <img src={"./assets/img/logo.png"} alt="logo" />
        </div>
        <div className="hamburger d-lg-none d-block" onClick={toggleSideNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav d-lg-flex d-none">
          <a href="#hero">Home</a>
          <a href="#about">Story</a>
          <a href="#NFT">Hams</a>
          <a href="#team">Team</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#FAQ">FAQ</a>
        </div>

        <div className="cta d-lg-flex d-none">
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
