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
  livePriceMSFTChanged = new Subject<number>();
  livePriceFBChanged = new Subject<number>();
  livePriceAMZNChanged = new Subject<number>();
  livePriceGOOGChanged = new Subject<number>();
  livePriceBABAChanged = new Subject<number>();

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
  public stockPriceGOOG: StockPrice[] = [];
  public stockPriceBABA: StockPrice[] = [];

  public livePriceAAPL: number = 1;
  public livePriceMSFT: number = 2;
  public livePriceFB: number = 3;
  public livePriceAMZN: number = 4;
  public livePriceGOOG: number = 5;
  public livePriceBABA: number = 6;

  ngOnInit() {}

  connect() {
    let socket = new SockJs(`http://192.168.99.100:8091/market-start`);

    let stompClient = Stomp.over(socket);

    stompClient.connect(
      {},
      frame => {
        stompClient.subscribe("/topic/market-price", message => {
          let messageBody: StockPrice = JSON.parse(message.body);

          switch (messageBody.stockSymbol) {
            case "AAPL":
              this.stockPriceAAPL.push(messageBody);
              this.livePriceAAPL = messageBody.priceClose;
              this.livePriceAAPLChanged.next(this.livePriceAAPL);
              break;
            case "MSFT":
              this.stockPriceMSFT.push(messageBody);
              this.livePriceMSFT = messageBody.priceClose;
              this.livePriceMSFTChanged.next(this.livePriceMSFT);
              break;
            case "FB":
              this.stockPriceFB.push(messageBody);
              this.livePriceFB = messageBody.priceClose;
              this.livePriceFBChanged.next(this.livePriceFB);
              break;
            case "AMZN":
              this.stockPriceAMZN.push(messageBody);
              this.livePriceAMZN = messageBody.priceClose;
              this.livePriceAMZNChanged.next(this.livePriceAMZN);
              break;
            case "GOOG":
              this.stockPriceAMZN.push(messageBody);
              this.livePriceAMZN = messageBody.priceClose;
              this.livePriceAMZNChanged.next(this.livePriceAMZN);
              break;
            case "BABA":
              this.stockPriceBABA.push(messageBody);
              this.livePriceBABA = messageBody.priceClose;
              this.livePriceBABAChanged.next(this.livePriceBABA);
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

  getStockBankUniversum() {
    return this.stockBankUniversum.slice();
  }
}
