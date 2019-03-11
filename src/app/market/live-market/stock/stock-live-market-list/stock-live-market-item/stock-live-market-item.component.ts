import { Component, OnInit, Input } from "@angular/core";

import { StockPrice } from "src/app/shared/stock-price.model";
import { Stock } from "src/app/shared/stock.model";

@Component({
  selector: "app-stock-live-market-item",
  templateUrl: "./stock-live-market-item.component.html",
  styleUrls: ["./stock-live-market-item.component.css"]
})
export class StockLiveMarketItemComponent implements OnInit {
  @Input() stock: Stock;
  @Input() stockPrice: StockPrice;
  @Input() index: number;
  @Input() livePriceAAPL: number;

  constructor() {}

  ngOnInit() {}
}
