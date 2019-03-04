import { Component, OnInit, Input } from "@angular/core";

import { StockPrice } from "src/app/shared/stock-price.model";

@Component({
  selector: "app-live-market-item",
  templateUrl: "./live-market-item.component.html",
  styleUrls: ["./live-market-item.component.css"]
})
export class LiveMarketItemComponent implements OnInit {
  @Input() stockPrice: StockPrice;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
