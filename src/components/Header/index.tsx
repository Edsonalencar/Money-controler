import { useState } from "react";
import { Container, Content } from "./styles";
import logo from "../../assets/logo.svg";

interface HandleModal {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HandleModal) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="DT Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
