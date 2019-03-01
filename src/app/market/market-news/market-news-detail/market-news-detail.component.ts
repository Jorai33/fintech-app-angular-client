import { Component, OnInit, Input } from "@angular/core";
import { News } from "../news.model";

@Component({
  selector: "app-market-news-detail",
  templateUrl: "./market-news-detail.component.html",
  styleUrls: ["./market-news-detail.component.css"]
})
export class MarketNewsDetailComponent implements OnInit {
  @Input() oneNews: News;

  constructor() {}

  ngOnInit() {}
}
