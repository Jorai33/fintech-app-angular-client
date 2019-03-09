import { Component, OnInit } from "@angular/core";

import { StockPrice } from "../../../../shared/stock-price.model";
import { LiveMarketService } from "../../live-market.service";

@Component({
  selector: "app-stock-live-market-list",
  templateUrl: "./stock-live-market-list.component.html",
  styleUrls: ["./stock-live-market-list.component.css"]
})
export class StockLiveMarketListComponent implements OnInit {
  stockPrices: StockPrice[];

  constructor(private liveMarketService: LiveMarketService) {}

  ngOnInit() {
    this.stockPrices = this.liveMarketService.getStockPrices();
  }
}
