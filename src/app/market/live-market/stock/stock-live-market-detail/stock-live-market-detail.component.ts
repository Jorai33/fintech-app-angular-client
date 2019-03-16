import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";
import * as d3 from "d3";
import { extent, max, min } from "d3-array";
import { scaleLinear, scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";
import { ActivatedRoute, Params } from "@angular/router";

import { Stock } from "src/app/shared/stock.model";
import { StockPrice } from "src/app/shared/stock-price.model";

@Component({
  selector: "app-stock-live-market-detail",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./stock-live-market-detail.component.html",
  styleUrls: ["./stock-live-market-detail.component.css"]
})
export class StockLiveMarketDetailComponent implements OnInit {
  @ViewChild("chart")
  private chartContainer: ElementRef;
  @Input() selectedStock: Stock;
  @Input() stockPriceSet: StockPrice[];

  id: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.id = 0; -> how to set the route id to a certain number?
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
  }

  ngOnChanges(): void {
    if (!this.stockPriceSet) {
      return;
    }
    this.createChart();
  }
  private createChart(): void {
    d3.select("svg").remove();

    const element = this.chartContainer.nativeElement;
    const data = this.stockPriceSet;

    console.log("ChartContainer ", this.chartContainer);
    console.log("NativeElement ", this.chartContainer.nativeElement);

    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", element.offsetWidth)
      .attr("height", element.offsetHeight);

    const contentWidth =
      element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight =
      element.offsetHeight - this.margin.top - this.margin.bottom;

    console.log("Content Width: ", contentWidth);
    console.log("Content Height: ", contentHeight);

    const x = d3
      .scaleTime()
      .rangeRound([this.margin.left, contentWidth - this.margin.right])
      .domain(extent(data, d => d.timestamp));

    console.log("Element X: ", x);

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight - this.margin.bottom, this.margin.top])
      .domain([0, d3.max(data, d => d.priceClose)]);

    console.log("Element Y: ", y);

    const g = svg
      .append("g")
      .attr(
        "transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")"
      );

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + contentHeight + ")")
      .call(d3.axisBottom(x));

    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.timestamp))
      .attr("y", d => y(d.priceClose))
      // .attr('width', x.bandwidth())
      .attr("width", 10)
      .attr("height", d => contentHeight - y(d.priceClose));
  }
}
