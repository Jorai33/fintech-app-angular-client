import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { News } from "../news.model";

@Component({
  selector: "app-market-news-list",
  templateUrl: "./market-news-list.component.html",
  styleUrls: ["./market-news-list.component.css"]
})
export class MarketNewsListComponent implements OnInit {
  @Output() oneNewsWasSelected = new EventEmitter<News>();

  news: News[] = [
    new News(
      "Financial Times",
      null,
      "Stocks to watch: Aston Martin, RSA, Bakkavor, Zalando",
      "There are few marginal buyers of Rio Tinto, warns Merrill Lynch",
      new URL(
        "https://www.ft.com/content/d0f83684-3b41-11e9-b856-5404d3811663"
      ),
      new URL(
        "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F7a80e81c-3b52-11e9-9988-28303f70fcff?source=next-opengraph&fit=scale-down&width=900"
      ),
      "Thursday 11:00 GMT\r\nWhat’s happening\r\n● Aston Martin fell to a record low after missing profit forecasts with its maiden full-year results as a listed company. The car maker’s guidance for 2019 also disappointed, particularly as the shares had rallied 12 per … ",
      new Date("2019-02-28T12:17:57Z")
    ),
    new News(
      "Trilu Li Lu",
      null,
      "Another Stocks to watch: Aston Martin, RSA, Bakkavor, Zalando",
      "There are few marginal buyers of Rio Tinto, warns Merrill Lynch",
      new URL(
        "https://www.ft.com/content/d0f83684-3b41-11e9-b856-5404d3811663"
      ),
      new URL(
        "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F7a80e81c-3b52-11e9-9988-28303f70fcff?source=next-opengraph&fit=scale-down&width=900"
      ),
      "Thursday 11:00 GMT\r\nWhat’s happening\r\n● Aston Martin fell to a record low after missing profit forecasts with its maiden full-year results as a listed company. The car maker’s guidance for 2019 also disappointed, particularly as the shares had rallied 12 per … ",
      new Date("2019-02-28T12:17:57Z")
    )
  ];

  constructor() {}

  ngOnInit() {}

  onOneNewsSelected(oneNews: News) {
    this.oneNewsWasSelected.emit(oneNews);
  }
}
