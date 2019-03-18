import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { StockPrice } from "src/app/shared/stock-price.model";
import { Stock } from "src/app/shared/stock.model";

var SockJs = require("sockjs-client");
var Stomp = require("stompjs");

@Injectable()
export class LiveMarketService {
  stockLivePriceSelected = new Subject<Stock>();
  stockLivePriceChanged = new Subject<StockPrice>();

  stockPriceAAPLSetChanged = new Subject<StockPrice[]>();
  stockPriceMSFTSetChanged = new Subject<StockPrice[]>();
  stockPriceFBSetChanged = new Subject<StockPrice[]>();
  stockPriceAMZNSetChanged = new Subject<StockPrice[]>();
  stockPriceGOOGSetChanged = new Subject<StockPrice[]>();
  stockPriceBABASetChanged = new Subject<StockPrice[]>();

  private stockBankUniversum: Stock[] = [
    new Stock("Apple", "AAPL"),
    new Stock("Microsoft", "MSFT"),
    new Stock("Facebook", "FB"),
    new Stock("Amazon", "AMZN"),
    new Stock("Alphabet", "GOOG"),
    new Stock("Alibaba", "BABA")
  ];

  private stockPriceAAPL: StockPrice[] = [
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:45",
      165.69,
      165.73,
      165.53,
      165.55,
      123634
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:46",
      165.62,
      165.7,
      165.47,
      165.54,
      118506
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:47",
      165.62,
      165.64,
      165.56,
      165.59,
      101555
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:48",
      165.68,
      165.83,
      165.64,
      165.71,
      224416
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:49",
      165.69,
      165.8,
      165.54,
      165.63,
      134084
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:50",
      165.65,
      165.67,
      165.49,
      165.65,
      82795
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:51",
      165.61,
      165.64,
      165.48,
      165.52,
      120619
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:52",
      165.55,
      165.75,
      165.5,
      165.68,
      91776
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:53",
      165.73,
      165.8,
      165.67,
      165.79,
      99698
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:54",
      165.8,
      165.8,
      165.65,
      165.72,
      109410
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:55",
      165.71,
      165.8,
      165.63,
      165.68,
      112524
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:56",
      165.74,
      166.08,
      165.74,
      165.97,
      184975
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:57",
      166.07,
      166.07,
      165.88,
      165.97,
      128257
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:58",
      165.95,
      166.0,
      165.89,
      165.92,
      71254
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T9:59",
      165.93,
      166.08,
      165.91,
      166.03,
      93305
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:00",
      166.05,
      166.18,
      166.0,
      166.03,
      141106
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:01",
      165.94,
      166.06,
      165.87,
      165.87,
      105213
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:02",
      165.87,
      165.91,
      165.7,
      165.74,
      78676
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:03",
      165.71,
      165.8,
      165.64,
      165.73,
      63289
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:04",
      165.69,
      165.69,
      165.57,
      165.6,
      62829
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:05",
      165.58,
      165.67,
      165.53,
      165.53,
      88306
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:06",
      165.55,
      165.57,
      165.41,
      165.56,
      124324
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:07",
      165.62,
      165.85,
      165.62,
      165.64,
      97985
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:08",
      165.6,
      165.76,
      165.6,
      165.68,
      55751
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:09",
      165.67,
      165.75,
      165.57,
      165.6,
      61382
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:10",
      165.58,
      165.58,
      165.45,
      165.45,
      73944
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:11",
      165.44,
      165.52,
      165.36,
      165.38,
      93170
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:12",
      165.34,
      165.38,
      165.27,
      165.27,
      74557
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:13",
      165.24,
      165.54,
      165.23,
      165.54,
      81702
    ),
    new StockPrice(
      "Apple",
      "AAPL",
      "12-18-2018T10:14",
      165.51,
      165.6,
      165.47,
      165.6,
      76061
    )
  ];
  private stockPriceMSFT: StockPrice[] = [
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:45",
      103.45,
      103.53,
      103.37,
      103.51,
      120049
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:46",
      103.48,
      103.68,
      103.48,
      103.67,
      180894
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:47",
      103.71,
      103.74,
      103.51,
      103.51,
      106184
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:48",
      103.53,
      103.63,
      103.47,
      103.47,
      80747
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:49",
      103.5,
      103.52,
      103.39,
      103.52,
      140912
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:50",
      103.53,
      103.54,
      103.41,
      103.45,
      90550
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:51",
      103.43,
      103.43,
      103.29,
      103.37,
      80560
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:52",
      103.4,
      103.4,
      103.3,
      103.39,
      86784
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:53",
      103.4,
      103.48,
      103.4,
      103.47,
      80966
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:54",
      103.45,
      103.55,
      103.42,
      103.55,
      98161
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:55",
      103.55,
      103.57,
      103.43,
      103.51,
      95511
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:56",
      103.54,
      103.62,
      103.44,
      103.49,
      83166
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:57",
      103.5,
      103.53,
      103.44,
      103.52,
      103044
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:58",
      103.51,
      103.53,
      103.43,
      103.45,
      73960
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T9:59",
      103.45,
      103.47,
      103.43,
      103.45,
      63827
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:00",
      103.45,
      103.52,
      103.44,
      103.48,
      73163
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:01",
      103.49,
      103.62,
      103.48,
      103.48,
      136838
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:02",
      103.47,
      103.47,
      103.22,
      103.22,
      125987
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:03",
      103.22,
      103.23,
      103.14,
      103.19,
      120630
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:04",
      103.15,
      103.17,
      103.07,
      103.09,
      84520
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:05",
      103.05,
      103.08,
      102.98,
      102.98,
      110778
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:06",
      102.98,
      103.04,
      102.95,
      103.04,
      120373
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:07",
      103.06,
      103.13,
      102.98,
      103.02,
      90675
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:08",
      103.02,
      103.09,
      102.98,
      103.01,
      82395
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:09",
      103.03,
      103.09,
      103.0,
      103.03,
      109579
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:10",
      103.0,
      103.07,
      102.98,
      103.03,
      121983
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:11",
      103.05,
      103.07,
      102.96,
      102.97,
      128690
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:12",
      102.94,
      103.07,
      102.94,
      103.0,
      118094
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:13",
      103.01,
      103.21,
      103.0,
      103.21,
      112448
    ),
    new StockPrice(
      "Microsoft",
      "MSFT",
      "12-18-2018T10:14",
      103.23,
      103.26,
      103.16,
      103.23,
      90959
    )
  ];
  private stockPriceFB: StockPrice[] = [
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:45",
      141.74,
      141.76,
      141.59,
      141.64,
      68855
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:46",
      141.71,
      141.81,
      141.53,
      141.53,
      62207
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:47",
      141.58,
      141.73,
      141.54,
      141.6,
      45082
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:48",
      141.6,
      141.78,
      141.48,
      141.73,
      83364
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:49",
      141.72,
      141.8,
      141.62,
      141.65,
      79223
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:50",
      141.68,
      141.8,
      141.6,
      141.69,
      57895
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:51",
      141.69,
      141.69,
      141.6,
      141.68,
      39719
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:52",
      141.64,
      141.83,
      141.53,
      141.83,
      33057
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:53",
      141.83,
      142.2,
      141.83,
      142.2,
      103205
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:54",
      142.16,
      142.17,
      142.02,
      142.12,
      55592
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:55",
      142.12,
      142.32,
      142.12,
      142.32,
      104381
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:56",
      142.4,
      142.6,
      142.36,
      142.43,
      147128
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:57",
      142.43,
      142.43,
      142.31,
      142.36,
      52178
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:58",
      142.44,
      142.48,
      142.33,
      142.33,
      52888
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T9:59",
      142.36,
      142.43,
      142.29,
      142.4,
      45238
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:00",
      142.4,
      142.42,
      142.32,
      142.35,
      52584
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:01",
      142.38,
      142.74,
      142.38,
      142.52,
      159635
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:02",
      142.53,
      142.53,
      142.13,
      142.13,
      77203
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:03",
      142.14,
      142.22,
      142.09,
      142.19,
      111810
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:04",
      142.13,
      142.13,
      141.92,
      141.96,
      61011
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:05",
      141.94,
      141.96,
      141.82,
      141.82,
      42733
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:06",
      141.78,
      141.96,
      141.72,
      141.94,
      65603
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:07",
      142.0,
      142.05,
      141.81,
      141.85,
      36427
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:08",
      141.83,
      141.96,
      141.83,
      141.93,
      23477
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:09",
      141.89,
      141.98,
      141.87,
      141.9,
      28974
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:10",
      141.88,
      141.9,
      141.74,
      141.74,
      44083
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:11",
      141.77,
      141.82,
      141.62,
      141.62,
      35128
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:12",
      141.64,
      141.76,
      141.64,
      141.74,
      30528
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:13",
      141.7,
      141.9,
      141.7,
      141.9,
      54466
    ),
    new StockPrice(
      "Facebook",
      "FB",
      "12-18-2018T10:14",
      141.95,
      141.97,
      141.86,
      141.97,
      24325
    )
  ];
  private stockPriceAMZN: StockPrice[] = [
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:45",
      1548.63,
      1551.0,
      1546.76,
      1546.76,
      42202
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:46",
      1548.12,
      1548.83,
      1545.46,
      1547.01,
      34945
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:47",
      1547.96,
      1547.96,
      1546.0,
      1546.0,
      28623
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:48",
      1546.96,
      1550.63,
      1546.96,
      1549.32,
      31465
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:49",
      1549.42,
      1549.42,
      1548.06,
      1548.55,
      24361
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:50",
      1549.16,
      1550.0,
      1547.79,
      1547.79,
      26265
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:51",
      1547.0,
      1547.0,
      1542.45,
      1543.99,
      28600
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:52",
      1544.0,
      1546.51,
      1542.62,
      1546.26,
      16543
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:53",
      1546.41,
      1547.0,
      1545.42,
      1547.0,
      21180
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:54",
      1547.15,
      1548.02,
      1547.15,
      1548.02,
      15716
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:55",
      1548.53,
      1548.53,
      1546.32,
      1546.32,
      20225
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:56",
      1547.89,
      1549.64,
      1546.99,
      1546.99,
      20427
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:57",
      1547.65,
      1547.65,
      1545.29,
      1545.62,
      14902
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:58",
      1546.47,
      1546.47,
      1543.53,
      1543.53,
      14771
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T9:59",
      1544.05,
      1544.05,
      1543.25,
      1544.02,
      9831
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:00",
      1544.5,
      1544.63,
      1544.0,
      1544.19,
      13248
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:01",
      1543.93,
      1545.0,
      1542.3,
      1542.3,
      20956
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:02",
      1542.27,
      1542.27,
      1538.0,
      1538.21,
      32015
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:03",
      1537.54,
      1538.0,
      1536.33,
      1536.33,
      32994
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:04",
      1536.17,
      1536.17,
      1534.25,
      1534.25,
      37032
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:05",
      1534.29,
      1536.65,
      1534.0,
      1534.62,
      23442
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:06",
      1534.27,
      1535.32,
      1532.92,
      1534.98,
      21828
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:07",
      1536.14,
      1536.7,
      1528.62,
      1530.6,
      38960
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:08",
      1529.26,
      1532.77,
      1529.26,
      1530.6,
      21354
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:09",
      1530.53,
      1530.81,
      1528.79,
      1528.79,
      13486
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:10",
      1528.0,
      1529.53,
      1526.0,
      1529.01,
      22788
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:11",
      1528.59,
      1529.75,
      1527.29,
      1527.35,
      25447
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:12",
      1528.5,
      1531.33,
      1528.3,
      1529.9,
      19318
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:13",
      1530.21,
      1533.81,
      1529.93,
      1533.81,
      16863
    ),
    new StockPrice(
      "Amazon",
      "AMZN",
      "12-18-2018T10:14",
      1533.7,
      1535.95,
      1533.21,
      1535.6,
      35348
    )
  ];
  private stockPriceGOOG: StockPrice[] = [
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:45",
      1033.23,
      1033.23,
      1031.34,
      1031.34,
      7113
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:46",
      1032.46,
      1032.46,
      1031.01,
      1031.01,
      5562
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:47",
      1030.98,
      1030.98,
      1030.98,
      1030.98,
      2149
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:48",
      1031.74,
      1031.74,
      1030.68,
      1030.68,
      5516
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:49",
      1029.94,
      1030.0,
      1029.47,
      1030.0,
      4996
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:50",
      1030.55,
      1030.97,
      1030.55,
      1030.97,
      3768
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:51",
      1029.3,
      1029.3,
      1028.4,
      1028.51,
      5923
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:52",
      1027.9,
      1027.9,
      1027.9,
      1027.9,
      1693
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:53",
      1029.15,
      1029.28,
      1029.15,
      1029.28,
      3335
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:54",
      1029.72,
      1029.72,
      1029.72,
      1029.72,
      1431
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:55",
      1029.95,
      1030.54,
      1029.8,
      1030.54,
      5935
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:56",
      1032.17,
      1032.2,
      1032.17,
      1032.2,
      3847
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:57",
      1030.49,
      1030.49,
      1030.49,
      1030.49,
      2165
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:58",
      1029.57,
      1029.57,
      1029.57,
      1029.57,
      2554
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T9:59",
      1029.93,
      1029.93,
      1029.93,
      1029.93,
      1731
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:00",
      1030.77,
      1030.98,
      1030.77,
      1030.85,
      4481
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:01",
      1031.49,
      1031.49,
      1031.0,
      1031.0,
      3765
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:02",
      1029.0,
      1029.0,
      1029.0,
      1029.0,
      2835
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:03",
      1028.34,
      1029.48,
      1028.34,
      1029.48,
      2276
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:04",
      1028.98,
      1028.98,
      1028.41,
      1028.41,
      5787
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:05",
      1027.9,
      1027.9,
      1027.9,
      1027.9,
      1736
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:06",
      1027.54,
      1029.09,
      1027.54,
      1029.09,
      5072
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:07",
      1028.78,
      1028.78,
      1028.78,
      1028.78,
      1821
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:08",
      1029.0,
      1029.0,
      1029.0,
      1029.0,
      1538
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:09",
      1028.98,
      1029.01,
      1028.98,
      1029.01,
      1909
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:10",
      1028.71,
      1028.71,
      1028.48,
      1028.48,
      3983
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:11",
      1028.08,
      1028.08,
      1028.08,
      1028.08,
      1651
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:12",
      1027.99,
      1028.0,
      1027.99,
      1028.0,
      3409
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:13",
      1029.08,
      1029.6,
      1029.08,
      1029.6,
      2966
    ),
    new StockPrice(
      "Alphabet",
      "GOOG",
      "12-18-2018T10:14",
      1030.66,
      1030.66,
      1030.66,
      1030.66,
      1523
    )
  ];
  private stockPriceBABA: StockPrice[] = [
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:45",
      143.23,
      143.26,
      142.95,
      143.09,
      76640
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:46",
      143.1,
      143.48,
      143.07,
      143.33,
      112823
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:47",
      143.39,
      143.49,
      143.36,
      143.36,
      85743
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:48",
      143.23,
      143.48,
      143.23,
      143.4,
      36342
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:49",
      143.4,
      143.4,
      142.92,
      143.06,
      63938
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:50",
      143.1,
      143.35,
      143.1,
      143.19,
      88986
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:51",
      143.07,
      143.08,
      142.7,
      142.75,
      72736
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:52",
      142.76,
      142.85,
      142.57,
      142.8,
      60690
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:53",
      142.79,
      143.01,
      142.79,
      142.97,
      76147
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:54",
      142.91,
      143.0,
      142.75,
      143.0,
      76343
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:55",
      143.0,
      143.2,
      142.92,
      143.05,
      119144
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:56",
      143.04,
      143.37,
      143.02,
      143.04,
      82750
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:57",
      143.04,
      143.04,
      142.73,
      142.92,
      83787
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:58",
      142.91,
      142.98,
      142.6,
      142.6,
      94309
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T9:59",
      142.58,
      142.77,
      142.53,
      142.7,
      54057
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:00",
      142.69,
      142.76,
      142.65,
      142.68,
      34538
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:01",
      142.75,
      142.79,
      142.71,
      142.75,
      42138
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:02",
      142.71,
      142.71,
      142.4,
      142.56,
      111889
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:03",
      142.52,
      142.52,
      142.37,
      142.38,
      42841
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:04",
      142.35,
      142.35,
      141.84,
      141.84,
      201932
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:05",
      141.81,
      142.04,
      141.71,
      141.72,
      130486
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:06",
      141.79,
      142.08,
      141.77,
      141.99,
      52505
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:07",
      142.04,
      142.18,
      141.77,
      141.81,
      67278
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:08",
      141.83,
      142.0,
      141.78,
      141.82,
      35303
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:09",
      141.76,
      141.81,
      141.58,
      141.58,
      70031
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:10",
      141.55,
      141.64,
      141.44,
      141.53,
      53439
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:11",
      141.59,
      141.6,
      141.22,
      141.28,
      111668
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:12",
      141.23,
      141.3,
      141.02,
      141.03,
      95881
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:13",
      141.08,
      141.45,
      141.06,
      141.45,
      78494
    ),
    new StockPrice(
      "Alibaba",
      "BABA",
      "12-18-2018T10:14",
      141.52,
      141.52,
      141.35,
      141.4,
      63912
    )
  ];

  ngOnInit() {}

  getStockBankUniversum() {
    return this.stockBankUniversum.slice();
  }

  connectWS() {
    let socket = new SockJs(`http://192.168.99.100:8091/market-start`);
    let stompClient = Stomp.over(socket);
    stompClient.connect(
      {},
      frame => {
        stompClient.subscribe("/topic/market-price", message => {
          let livePriceMessage: StockPrice = JSON.parse(message.body);
          this.stockLivePriceChanged.next(livePriceMessage);
          this.updateStockPriceSet(livePriceMessage);
        });
      },
      function(error) {
        alert("STOMP error " + error);
      }
    );
  }

  updateStockPriceSet(messageBody: StockPrice) {
    switch (messageBody.stockSymbol) {
      case "AAPL":
        let stockPriceAAPLCopy = this.stockPriceAAPL.slice();
        stockPriceAAPLCopy.shift();
        stockPriceAAPLCopy.push(messageBody);
        this.stockPriceAAPL = stockPriceAAPLCopy;
        this.stockPriceAAPLSetChanged.next(stockPriceAAPLCopy);
        break;
      case "MSFT":
        let stockPriceMSFTCopy = this.stockPriceMSFT.slice();
        stockPriceMSFTCopy.shift();
        stockPriceMSFTCopy.push(messageBody);
        this.stockPriceMSFT = stockPriceMSFTCopy;
        this.stockPriceMSFTSetChanged.next(stockPriceMSFTCopy);
        break;
      case "FB":
        let stockPriceFBCopy = this.stockPriceFB.slice();
        stockPriceFBCopy.shift();
        stockPriceFBCopy.push(messageBody);
        this.stockPriceFB = stockPriceFBCopy;
        this.stockPriceFBSetChanged.next(stockPriceFBCopy);
        break;
      case "AMZN":
        let stockPriceAMZNCopy = this.stockPriceAMZN.slice();
        stockPriceAMZNCopy.shift();
        stockPriceAMZNCopy.push(messageBody);
        this.stockPriceAMZN = stockPriceAMZNCopy;
        this.stockPriceAMZNSetChanged.next(stockPriceAMZNCopy);
        break;
      case "GOOG":
        let stockPriceGOOGCopy = this.stockPriceGOOG.slice();
        stockPriceGOOGCopy.shift();
        stockPriceGOOGCopy.push(messageBody);
        this.stockPriceGOOG = stockPriceGOOGCopy;
        this.stockPriceGOOGSetChanged.next(stockPriceGOOGCopy);
        break;
      case "BABA":
        let stockPriceBABACopy = this.stockPriceBABA.slice();
        stockPriceBABACopy.shift();
        stockPriceBABACopy.push(messageBody);
        this.stockPriceBABA = stockPriceBABACopy;
        this.stockPriceBABASetChanged.next(stockPriceBABACopy);
        break;
      default:
    }
  }
}
