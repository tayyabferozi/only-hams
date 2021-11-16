import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="./assets/img/logo.png" className="logo" alt="logo" />
          </div>
          <div className="col-md-6">
            <div className="social text-left text-md-end">
              <img src="./assets/img/twitter-footer.png" alt="twitter" />
              <img src="./assets/img/discord-footer.png" alt="discord" />
              <img src="./assets/img/youtube-footer.png" alt="youtube" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            COPYRIGHT &copy; 2021, THE HAMTONS
          </div>
          <div className="col-md-6 mt-5 text-left text-md-end">
            INTERFACE AND IMPLEMENTATION CONTRACTS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
