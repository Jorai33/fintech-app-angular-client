import { Component, OnInit } from "@angular/core";

import { News } from "../news.model";
import { MarketNewsService } from "../market-news.service";

@Component({
  selector: "app-market-news-list",
  templateUrl: "./market-news-list.component.html",
  styleUrls: ["./market-news-list.component.css"]
})
export class MarketNewsListComponent implements OnInit {
  news: News[];

  constructor(private marketNewsService: MarketNewsService) {}

  ngOnInit() {
    this.news = this.marketNewsService.getNews();
  }
}
