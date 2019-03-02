import { Component, OnInit, Input } from "@angular/core";

import { News } from "../../news.model";
import { MarketNewsService } from "../../market-news.service";

@Component({
  selector: "app-market-news-item",
  templateUrl: "./market-news-item.component.html",
  styleUrls: ["./market-news-item.component.css"]
})
export class MarketNewsItemComponent implements OnInit {
  @Input() oneNews: News;

  constructor(private marketNewsService: MarketNewsService) {}

  ngOnInit() {}

  onSelected() {
    this.marketNewsService.oneNewsSelected.emit(this.oneNews);
  }
}
