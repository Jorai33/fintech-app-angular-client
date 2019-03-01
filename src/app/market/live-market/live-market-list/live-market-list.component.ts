import { Component, OnInit } from "@angular/core";
import { StockPrice } from "../../../shared/stock-price.model";

@Component({
  selector: "app-live-market-list",
  templateUrl: "./live-market-list.component.html",
  styleUrls: ["./live-market-list.component.css"]
})
export class LiveMarketListComponent implements OnInit {
  stockPrices: StockPrice[] = [
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

  constructor() {}

  ngOnInit() {}
}
