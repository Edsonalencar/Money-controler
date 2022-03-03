import { useState, useEffect } from "react";
import { MoneyAPI } from "../../services/moneyControlerAPI";
import { TypesMoneyAPI } from "../../services/types/moneyAPI.types";
import { Container } from "./styles";

export function TransactionsTable() {

  const [ transactions, setTransaction] = useState<TypesMoneyAPI[]>([])

  useEffect(() => {
    MoneyAPI.GetAllTransactions().then((res) => {
      setTransaction(res)
      console.log(res)
    })
  }, [])
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Software</td>
            <td className="deposit">RS4.000</td>
            <td>Desenvolvimento</td>
            <td>25/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- RS800</td>
            <td>Modaria</td>
            <td>25/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- RS800</td>
            <td>Modaria</td>
            <td>25/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- RS800</td>
            <td>Modaria</td>
            <td>25/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
