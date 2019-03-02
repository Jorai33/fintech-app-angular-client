import { Component, OnInit, Input } from "@angular/core";

import { StockPrice } from "src/app/shared/stock-price.model";

@Component({
  selector: "app-live-market-detail",
  templateUrl: "./live-market-detail.component.html",
  styleUrls: ["./live-market-detail.component.css"]
})
export class LiveMarketDetailComponent implements OnInit {
  @Input() stockPrice: StockPrice;

  constructor() {}

  ngOnInit() {}
}
