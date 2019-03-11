import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { StockPrice } from "../../../../shared/stock-price.model";
import { LiveMarketService } from "../../live-market.service";
import { Stock } from "src/app/shared/stock.model";

@Component({
  selector: "app-stock-live-market-list",
  templateUrl: "./stock-live-market-list.component.html",
  styleUrls: ["./stock-live-market-list.component.css"]
})
export class StockLiveMarketListComponent implements OnInit, OnDestroy {
  stockPrices: StockPrice[];
  stockBankUniversum: Stock[];

  livePriceAAPL: number;

  private subscription: Subscription;

  constructor(private liveMarketService: LiveMarketService) {}

  ngOnInit() {
    // this.stockPrices = this.liveMarketService.getStockPrices();
    this.liveMarketService.connect();
    this.stockBankUniversum = this.liveMarketService.getStockBankUniversum();
    this.subscription = this.liveMarketService.livePriceAAPLChanged.subscribe(
      (stockClosingPrice: number) => (this.livePriceAAPL = stockClosingPrice)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
