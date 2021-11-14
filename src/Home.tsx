import { useEffect, useState } from "react";

import * as anchor from "@project-serum/anchor";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import { getCandyMachineState } from "./candy-machine";

const ConnectButton = WalletDialogButton;

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

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
        {/* <ConnectButton>{wallet ? "Connected" : "Connect Wallet"}</ConnectButton> */}
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
