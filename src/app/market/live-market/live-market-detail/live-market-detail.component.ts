import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { StockPrice } from "src/app/shared/stock-price.model";
import { LiveMarketService } from "../live-market.service";

@Component({
  selector: "app-live-market-detail",
  templateUrl: "./live-market-detail.component.html",
  styleUrls: ["./live-market-detail.component.css"]
})
export class LiveMarketDetailComponent implements OnInit {
  stockPrice: StockPrice;
  id: number;

  constructor(
    private liveMarketService: LiveMarketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.stockPrice = this.liveMarketService.getStockPrice(this.id);
    });
  }
}
