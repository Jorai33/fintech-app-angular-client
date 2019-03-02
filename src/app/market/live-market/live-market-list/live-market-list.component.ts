import { Component, OnInit } from "@angular/core";
import { StockPrice } from "../../../shared/stock-price.model";
import { LiveMarketService } from "../live-market.service";

@Component({
  selector: "app-live-market-list",
  templateUrl: "./live-market-list.component.html",
  styleUrls: ["./live-market-list.component.css"]
})
export class LiveMarketListComponent implements OnInit {
  stockPrices: StockPrice[];

  constructor(private liveMarketService: LiveMarketService) {}

  ngOnInit() {
    this.stockPrices = this.liveMarketService.getStockPrices();
  }
}
