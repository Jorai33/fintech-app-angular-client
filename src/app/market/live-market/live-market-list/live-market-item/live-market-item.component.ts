import { Component, OnInit, Input } from "@angular/core";

import { LiveMarketService } from "../../live-market.service";
import { StockPrice } from "src/app/shared/stock-price.model";

@Component({
  selector: "app-live-market-item",
  templateUrl: "./live-market-item.component.html",
  styleUrls: ["./live-market-item.component.css"]
})
export class LiveMarketItemComponent implements OnInit {
  @Input() stockPrice: StockPrice;

  constructor(private liveMarketService: LiveMarketService) {}

  ngOnInit() {}

  onSelected() {
    this.liveMarketService.stockPriceSelected.emit(this.stockPrice);
  }
}
