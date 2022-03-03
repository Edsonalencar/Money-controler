import { useState } from "react";
import { Fragment } from "react";
import { Deshbord } from "./components/Deshbord";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GblobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Fragment>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Deshbord />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GblobalStyle />
    </Fragment>
  );
}
