import { Component, OnInit } from "@angular/core";

import { StockPrice } from "../../../../shared/stock-price.model";
import { LiveMarketService } from "../../live-market.service";
import { Stock } from "src/app/shared/stock.model";

@Component({
  selector: "app-stock-live-market-list",
  templateUrl: "./stock-live-market-list.component.html",
  styleUrls: ["./stock-live-market-list.component.css"]
})
export class StockLiveMarketListComponent implements OnInit {
  stockBankUniversum: Stock[];

  constructor(private liveMarketService: LiveMarketService) {}

  ngOnInit() {
    this.liveMarketService.connect();
    this.stockBankUniversum = this.liveMarketService.getStockBankUniversum();
  }
}
