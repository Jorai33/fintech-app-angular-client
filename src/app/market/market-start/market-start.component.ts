import { Component, OnInit } from "@angular/core";
import { LiveMarketService } from "../live-market/live-market.service";

@Component({
  selector: "app-market-start",
  templateUrl: "./market-start.component.html",
  styleUrls: ["./market-start.component.css"],
  providers: [LiveMarketService]
})
export class MarketStartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
