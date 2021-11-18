import React from "react";
import { HomeProps } from "../Mint";

import { Mint } from "../Mint";

const Hero = (props: HomeProps) => {
  return (
    <div id="hero">
      <div className="content">
        <Mint
          candyMachineId={props.candyMachineId}
          config={props.config}
          connection={props.connection}
          startDate={props.startDate}
          treasury={props.treasury}
          txTimeout={props.txTimeout}
        />
      </div>
    </div>
  );
};

export default Hero;
