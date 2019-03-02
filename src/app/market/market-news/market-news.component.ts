import { Component, OnInit } from "@angular/core";

import { News } from "./news.model";
import { MarketNewsService } from "./market-news.service";

@Component({
  selector: "app-market-news",
  templateUrl: "./market-news.component.html",
  styleUrls: ["./market-news.component.css"],
  providers: [MarketNewsService]
})
export class MarketNewsComponent implements OnInit {
  selectedOneNews: News;

  constructor(private marketNewsService: MarketNewsService) {}

  ngOnInit() {
    this.marketNewsService.oneNewsSelected.subscribe((oneNews: News) => {
      this.selectedOneNews = oneNews;
    });
  }
}
