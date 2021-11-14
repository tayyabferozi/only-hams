import React from "react";
import { HomeProps } from "../Home";

import { Mint } from "../Mint";

const Hero = (props: HomeProps) => {
  return (
    <div id="hero">
      <button className="mint-btn">
        <Mint
          candyMachineId={props.candyMachineId}
          config={props.config}
          connection={props.connection}
          startDate={props.startDate}
          treasury={props.treasury}
          txTimeout={props.txTimeout}
        />
      </button>
      <img src="./assets/img/bg-hero.svg" alt="bg-hero" />
    </div>
  );
};

export default Hero;
