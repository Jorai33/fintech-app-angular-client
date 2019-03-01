import { Component, OnInit } from "@angular/core";
import { News } from "./news.model";

@Component({
  selector: "app-market-news",
  templateUrl: "./market-news.component.html",
  styleUrls: ["./market-news.component.css"]
})
export class MarketNewsComponent implements OnInit {
  selectedOneNews: News;

  constructor() {}

  ngOnInit() {}
}
