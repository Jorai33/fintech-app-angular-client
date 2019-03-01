import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { News } from "../../news.model";

@Component({
  selector: "app-market-news-item",
  templateUrl: "./market-news-item.component.html",
  styleUrls: ["./market-news-item.component.css"]
})
export class MarketNewsItemComponent implements OnInit {
  @Input() oneNews: News;
  @Output() oneNewsSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.oneNewsSelected.emit();
  }
}
