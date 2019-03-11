import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { StockPrice } from "src/app/shared/stock-price.model";
import { Stock } from "src/app/shared/stock.model";

var SockJs = require("sockjs-client");
var Stomp = require("stompjs");

@Injectable()
export class LiveMarketService {
  stockPriceSelected = new EventEmitter<StockPrice>();

  livePriceAAPLChanged = new Subject<number>();

  private stockBankUniversum: Stock[] = [
    new Stock("Apple", "AAPL"),
    new Stock("Microsoft", "MSFT"),
    new Stock("Facebook", "FB"),
    new Stock("Amazon", "AMZN"),
    new Stock("Google", "GOOG"),
    new Stock("Alibaba", "BABA")
  ];

  public stockPriceAAPL: StockPrice[] = [];
  public stockPriceMSFT: StockPrice[] = [];
  public stockPriceFB: StockPrice[] = [];
  public stockPriceAMZN: StockPrice[] = [];
  public stockPriceBABA: StockPrice[] = [];

  public livePriceAAPL: number = 1;
  public livePriceMSFT: number = 2;
  public livePriceFB: number = 3;
  public livePriceAMZN: number = 4;
  public livePriceBABA: number = 5;

  ngOnInit() {}

  connect() {
    let socket = new SockJs(`http://192.168.99.100:8091/market-start`);

    let stompClient = Stomp.over(socket);

    stompClient.connect(
      {},
      frame => {
        stompClient.subscribe("/topic/market-price", message => {
          console.log(JSON.parse(message.body));
          let messageBody: StockPrice = JSON.parse(message.body);

          switch (messageBody.stockSymbol) {
            case "AAPL":
              this.stockPriceAAPL.push(messageBody);
              this.livePriceAAPL = messageBody.priceClose;
              this.livePriceAAPLChanged.next(this.livePriceAAPL);
              console.log("LMS -> stockPriceAPPL [] -> ", this.stockPriceAAPL);
              console.log("LMS -> livePriceAPPL [] -> ", this.livePriceAAPL);
              break;
            case "MSFT":
              this.stockPriceMSFT.push(message.body);
              this.livePriceMSFT = message.priceClose;
              break;
            case "FB":
              this.stockPriceFB.push(message.body);
              this.livePriceFB = message.priceClose;
              break;
            case "AMZN":
              this.stockPriceAMZN.push(message.body);
              this.livePriceAMZN = message.priceClose;
              break;
            case "BABA":
              this.stockPriceBABA.push(message.body);
              this.livePriceBABA = message.priceClose;
              break;
            default:
          }
        });
      },
      function(error) {
        alert("STOMP error " + error);
      }
    );
  }

  // stompSubscribeCallback(message) {
  //   console.log(JSON.parse(message.body));
  //   this.distributeStockPrices(JSON.parse(message.body));
  // }

  // distributeStockPrices(message) {
  //   switch (message.stockSymbol) {
  //     case "AAPL":
  //       this.stockPriceAAPL.push(message.body);
  //       this.livePriceAAPL = message.priceClose;
  //       this.livePriceAAPLChanged.next(this.livePriceAAPL);
  //       console.log("LMS -> stockPriceAPPL [] -> ", this.stockPriceAAPL);
  //       console.log("LMS -> livePriceAPPL [] -> ", this.livePriceAAPL);
  //       break;
  //     case "MSFT":
  //       this.stockPriceMSFT.push(message.body);
  //       this.livePriceMSFT = message.priceClose;
  //       break;
  //     case "FB":
  //       this.stockPriceFB.push(message.body);
  //       this.livePriceFB = message.priceClose;
  //       break;
  //     case "AMZN":
  //       this.stockPriceAMZN.push(message.body);
  //       this.livePriceAMZN = message.priceClose;
  //       break;
  //     case "BABA":
  //       this.stockPriceBABA.push(message.body);
  //       this.livePriceBABA = message.priceClose;
  //       break;
  //     default:
  //   }
  // }

  getStockBankUniversum() {
    return this.stockBankUniversum.slice();
  }
}
