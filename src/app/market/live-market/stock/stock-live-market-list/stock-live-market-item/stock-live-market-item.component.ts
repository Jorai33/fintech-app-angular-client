import { Component, OnInit, Input } from "@angular/core";

import { Stock } from "src/app/shared/stock.model";
import { Subscription } from "rxjs";
import { StockPrice } from "src/app/shared/stock-price.model";
import { LiveMarketService } from "../../../live-market.service";

@Component({
  selector: "app-stock-live-market-item",
  templateUrl: "./stock-live-market-item.component.html",
  styleUrls: ["./stock-live-market-item.component.css"]
})
export class StockLiveMarketItemComponent implements OnInit {
  @Input() stock: Stock;
  @Input() index: number;

  private subscription: Subscription;

  private stockName: string = "";
  private stockSymbol: string = "";
  private priceClose: number = 0;
  private volume: number = 0;
  private timestamp: Date = new Date();

  private priceCloseIncrease: boolean = true;

  constructor(private liveMarketService: LiveMarketService) {}

  ngOnInit() {
    this.subscription = this.liveMarketService.stockLivePriceChanged.subscribe(
      (stockLivePrice: StockPrice) => {
        if (stockLivePrice.stockSymbol == this.stock.symbol) {
          this.stockName = stockLivePrice.stockName;
          this.stockSymbol = stockLivePrice.stockSymbol;
          if (stockLivePrice.priceClose > this.priceClose) {
            this.priceCloseIncrease = true;
          } else {
            this.priceCloseIncrease = false;
          }
          this.priceClose = stockLivePrice.priceClose;
          this.volume = stockLivePrice.volume;
          this.timestamp = stockLivePrice.timestamp;
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
