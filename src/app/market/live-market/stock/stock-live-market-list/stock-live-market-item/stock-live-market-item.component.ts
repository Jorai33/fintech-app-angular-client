import { Component, OnInit, Input } from "@angular/core";

import { Stock } from "src/app/shared/stock.model";

@Component({
  selector: "app-stock-live-market-item",
  templateUrl: "./stock-live-market-item.component.html",
  styleUrls: ["./stock-live-market-item.component.css"]
})
export class StockLiveMarketItemComponent implements OnInit {
  @Input() stock: Stock;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
