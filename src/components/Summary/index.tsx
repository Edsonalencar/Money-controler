import { Container, Content } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <Content>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </Content>

      <Content>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>- R$500</strong>
      </Content>

      <Content>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500</strong>
      </Content>
    </Container>
  );
}
