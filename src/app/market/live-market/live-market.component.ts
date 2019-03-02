import { Component, OnInit } from "@angular/core";

import { LiveMarketService } from "./live-market.service";
import { StockPrice } from "src/app/shared/stock-price.model";

@Component({
  selector: "app-live-market",
  templateUrl: "./live-market.component.html",
  styleUrls: ["./live-market.component.css"],
  providers: [LiveMarketService]
})
export class LiveMarketComponent implements OnInit {
  selectedStockPrice: StockPrice;

  constructor(private liveMarketService: LiveMarketService) {}

  ngOnInit() {
    this.liveMarketService.stockPriceSelected.subscribe(
      (stockPrice: StockPrice) => {
        this.selectedStockPrice = stockPrice;
      }
    );
  }
}
