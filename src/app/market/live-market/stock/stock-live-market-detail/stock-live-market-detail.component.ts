import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnChanges
} from "@angular/core";
import * as d3 from "d3";
import { extent, max, min } from "d3-array";
import { scaleLinear, scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";
import d3Tip from "d3-tip";
import { ActivatedRoute, Params } from "@angular/router";

import { Stock } from "src/app/shared/stock.model";
import { StockPrice } from "src/app/shared/stock-price.model";

@Component({
  selector: "app-stock-live-market-detail",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./stock-live-market-detail.component.html",
  styleUrls: ["./stock-live-market-detail.component.css"]
})
export class StockLiveMarketDetailComponent implements OnInit, OnChanges {
  @ViewChild("chartCandle")
  private chartCandleContainer: ElementRef;
  @ViewChild("chartVolume")
  private chartVolumeContainer: ElementRef;
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
    this.createChart();
  }

  ngOnChanges(): void {
    if (!this.stockPriceSet) {
      return;
    }

    this.createChart();
  }
  private createChart(): void {
    d3.selectAll("svg").remove();

    const elementCandle = this.chartCandleContainer.nativeElement;
    const elementVolume = this.chartVolumeContainer.nativeElement;
    var data: StockPrice[] = this.stockPriceSet;
    const parseTime = timeParse("%m-%d-%YT%H:%M");

    // CANDLE CHART
    const svgCandle = d3
      .select(elementCandle)
      .append("svg")
      .attr("width", elementCandle.offsetWidth)
      .attr("height", elementCandle.offsetHeight);

    const contentWidthCandle =
      elementCandle.offsetWidth - this.margin.left - this.margin.right;
    const contentHeightCandle =
      elementCandle.offsetHeight * 0.6 - this.margin.top - this.margin.bottom;

    var xScaleCandle = d3
      .scaleTime()
      .domain(extent(data, d => parseTime(d.timestamp)))
      .domain(extent(data, d => parseTime(d.timestamp)))
      .range([this.margin.left, contentWidthCandle])
      .nice();

    var yScaleCandle = d3
      .scaleLinear()
      .domain([min(data, d => d.priceLow), max(data, d => d.priceHigh)])
      .range([contentHeightCandle * 1.8, this.margin.top])
      .nice();

    // Tip on mouseover-mouseout for rectangles
    var tipPrice = d3Tip();
    tipPrice.attr("class", "d3-tip").html(d => {
      return (
        `<strong>priceHigh: </strong> <span style="color:red">` +
        d.priceHigh +
        "</span>" +
        `<strong>priceLow: </strong> <span style="color:blue">` +
        d.priceLow +
        "</span>" +
        `<strong>priceOpen: </strong> <span style="color:red">` +
        d.priceOpen +
        "</span>" +
        `<strong>priceClose: </strong> <span style="color:blue">` +
        d.priceClose +
        "</span>"
      );
    });

    svgCandle.call(tipPrice);

    const gCandle = svgCandle
      .append("g")
      .attr("class", "candle")
      .attr("transform", "translate(0," + this.margin.top + ")");

    gCandle
      .append("g")
      .attr("class", "axis axis-candle-x")
      .attr("transform", "translate(0," + contentHeightCandle * 1.8 + ")")
      .call(d3.axisBottom(xScaleCandle));

    gCandle
      .append("g")
      .attr("class", "axis axis-candle-y")
      .attr(
        "transform",
        "translate(" +
          contentWidthCandle * 1.1 +
          ", " +
          -this.margin.bottom / 2 +
          ")"
      )
      .call(d3.axisLeft(yScaleCandle).ticks(7))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em");

    // Left Label Candle
    gCandle
      .append("text")
      .attr("x", -(contentHeightCandle / 2) - this.margin.left * 0.7)
      .attr("y", -this.margin.top)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Price");

    // Gridlines in y axis function
    function make_y_gridlines() {
      return d3.axisRight(yScaleCandle).ticks(5);
    }

    // Add the Y gridlines
    gCandle
      .append("g")
      .attr("class", "grid-candle")
      .attr("transform", "translate(40, " + -this.margin.bottom / 2 + ")")
      .call(
        make_y_gridlines()
          .tickSize(contentWidthCandle - 40)
          .tickFormat("")
      );

    gCandle
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", d => (d.priceOpen > d.priceClose ? "red" : "green"))
      .attr("fill-opacity", 1)
      .attr("class", "bar")
      .attr("x", d => xScaleCandle(parseTime(d.timestamp)))
      .attr("y", d => yScaleCandle(max([d.priceOpen, d.priceClose])))
      .attr("width", 6)
      .attr(
        "height",
        d =>
          yScaleCandle(min([d.priceOpen, d.priceClose])) -
          yScaleCandle(max([d.priceOpen, d.priceClose]))
      )
      .attr("transform", "translate(0, " + -this.margin.bottom / 2 + ")")
      .on("mouseover", function(d) {
        tipPrice.show(d, this);
      })
      .on("mouseout", function(d) {
        tipPrice.hide(d, this);
      });

    gCandle
      .selectAll()
      .data(data)
      .enter()
      .append("line")
      .attr("stroke", d => (d.priceOpen > d.priceClose ? "red" : "green"))
      .attr("stroke-width", 1)
      .attr("x1", d => xScaleCandle(parseTime(d.timestamp)) + 3)
      .attr("x2", d => xScaleCandle(parseTime(d.timestamp)) + 3)
      .attr("y1", d => yScaleCandle(d.priceHigh))
      .attr("y2", d => yScaleCandle(d.priceLow))
      .attr("transform", "translate(0, " + -this.margin.bottom / 2 + ")");

    // VOLUME CHART
    const svgVolume = d3
      .select(elementVolume)
      .append("svg")
      .attr("width", elementVolume.offsetWidth)
      .attr("height", elementVolume.offsetHeight);

    const gVolume = svgVolume
      .append("g")
      .attr("class", "volume")
      .attr("transform", "translate(0, -20)");

    const contentWidthVolume =
      elementVolume.offsetWidth - this.margin.left - this.margin.right;
    const contentHeightVolume =
      elementVolume.offsetHeight - this.margin.top - this.margin.bottom;

    var xScaleVolume = d3
      .scaleTime()
      .domain(extent(data, d => parseTime(d.timestamp)))
      .range([this.margin.left, contentWidthVolume])
      .nice();

    var yScaleVolume = d3
      .scaleLinear()
      .domain([d3.min(data, d => d.volume), d3.max(data, d => d.volume)])
      .range([contentHeightVolume, 0])
      .nice();

    var tipVolume = d3Tip();
    tipVolume
      .attr("class", "d3-tip")
      .html(d => {
        return "<div class='vl'></div>";
      })
      .style("position", "absolute")
      .style("text-align", "center");

    svgVolume.call(tipVolume);

    // gVolume
    //   .append("g")
    //   .attr("class", "axis axis-volume-y")
    //   .attr("transform", "translate(30,0)")
    //   .call(d3.axisLeft(yScaleVolume).ticks(5))
    //   .append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 6)
    //   .attr("dy", "0.71em");

    // // Left Label Volume
    // gVolume
    //   .append("text")
    //   .attr("x", -contentHeightVolume * 0.8)
    //   .attr("y", -this.margin.top)
    //   .attr("transform", "rotate(-90)")
    //   .attr("text-anchor", "middle")
    //   .text("Volume");

    // // gridlines in x axis function
    // function make_x_gridlines() {
    //   return d3.axisBottom(xScaleCandle).ticks(30);
    // }

    // // add the X gridlines
    // gVolume
    //   .append("g")
    //   .attr("class", "grid-volume")
    //   .attr("transform", "translate(0," + contentHeightCandle + ")")
    //   .call(
    //     make_x_gridlines()
    //       .tickSize(-contentHeightCandle)
    // // .tickFormat("")
    //   );

    gVolume
      .selectAll(".vol")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", "#999999")
      .attr("fill-opacity", 1)
      .attr("class", "vol")
      .attr("x", d => xScaleVolume(parseTime(d.timestamp)))
      .attr("y", d => yScaleVolume(d.volume))
      .attr("width", 10)
      .attr("height", function(d) {
        return contentHeightVolume - yScaleVolume(d.volume);
      })
      .on("mouseover", function(d) {
        tipVolume.show(d, this);
      })
      .on("mouseout", function(d) {
        tipVolume.hide(d, this);
      });
  }
}
