import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { StockPrice } from "src/app/shared/stock-price.model";
import { Stock } from "src/app/shared/stock.model";

var SockJs = require("sockjs-client");
var Stomp = require("stompjs");

@Injectable()
export class LiveMarketService {
  stockPriceSelected = new EventEmitter<StockPrice>();

  stockLivePriceChanged = new Subject<StockPrice>();

  private stockBankUniversum: Stock[] = [
    new Stock("Apple", "AAPL"),
    new Stock("Microsoft", "MSFT"),
    new Stock("Facebook", "FB"),
    new Stock("Amazon", "AMZN"),
    new Stock("Google", "GOOG"),
    new Stock("Alibaba", "BABA")
  ];

  // public stockPriceAAPL: StockPrice[] = [];
  // public stockPriceMSFT: StockPrice[] = [];
  // public stockPriceFB: StockPrice[] = [];
  // public stockPriceAMZN: StockPrice[] = [];
  // public stockPriceGOOG: StockPrice[] = [];
  // public stockPriceBABA: StockPrice[] = [];

  ngOnInit() {}

  connect() {
    let socket = new SockJs(`http://192.168.99.100:8091/market-start`);

    let stompClient = Stomp.over(socket);

    stompClient.connect(
      {},
      frame => {
        stompClient.subscribe("/topic/market-price", message => {
          let livePriceMessage: StockPrice = JSON.parse(message.body);
          this.stockLivePriceChanged.next(livePriceMessage);
        });
      },
      function(error) {
        alert("STOMP error " + error);
      }
    );
  }

  getStockBankUniversum() {
    return this.stockBankUniversum.slice();
  }
}
