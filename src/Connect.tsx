import { useEffect, useState } from "react";

import * as anchor from "@project-serum/anchor";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import { getCandyMachineState } from "./candy-machine";
import { HomeProps } from "./Mint";

const ConnectButton = WalletDialogButton;

export const Connect = (props: HomeProps) => {
  const [, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const { goLiveDate } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setStartDate(goLiveDate);
    })();
  };

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <>
      <div>
        <ConnectButton>
          {wallet ? (
            <img src="./assets/img/connected.png" alt="connected" />
          ) : (
            <img src="./assets/img/connect.png" alt="connect" />
          )}
        </ConnectButton>
      </div>
    </>
  );
};
