import { Component, OnInit } from "@angular/core";

import { LiveMarketService } from "./live-market/live-market.service";

@Component({
  selector: "app-market",
  templateUrl: "./market.component.html",
  styleUrls: ["./market.component.css"],
  providers: [LiveMarketService]
})
export class MarketComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
