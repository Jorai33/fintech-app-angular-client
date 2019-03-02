import { EventEmitter } from "@angular/core";

import { StockPrice } from "src/app/shared/stock-price.model";

export class LiveMarketService {
  stockPriceSelected = new EventEmitter<StockPrice>();

  private stockPrices: StockPrice[] = [
    new StockPrice(
      "Apple",
      "AAPL",
      new Date("12/18/2018 9:45"),
      165.69,
      165.73,
      165.53,
      165.55,
      123634
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      new Date("12/18/2018 9:45"),
      165.69,
      165.73,
      165.53,
      165.55,
      123634
    )
  ];

  getStockPrices() {
    return this.stockPrices.slice();
  }
}
