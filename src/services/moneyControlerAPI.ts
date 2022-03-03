import axios from "axios";
import { TypesMoneyAPI } from "./types/moneyAPI.types";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export class MoneyAPI {
  static async GetAllTransactions(): Promise<TypesMoneyAPI[]> {
    const response = await api.get("/transactions");
    return response.data;
  }

  static AddTransactions(Transaction: TypesMoneyAPI) {
    api.post("/transactions", {
      Transaction,
    });
  }
}
