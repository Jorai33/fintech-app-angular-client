import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { StockPrice } from "../../../../shared/stock-price.model";
import { LiveMarketService } from "../../live-market.service";

@Component({
  selector: "app-stock-live-market-detail",
  templateUrl: "./stock-live-market-detail.component.html",
  styleUrls: ["./stock-live-market-detail.component.css"]
})
export class StockLiveMarketDetailComponent implements OnInit {
  stockPrice: StockPrice;
  id: number;

  constructor(
    private liveMarketService: LiveMarketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      // this.stockPrice = this.liveMarketService.getStockPrice(this.id);
    });
  }
}
