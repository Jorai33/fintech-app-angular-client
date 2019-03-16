export class StockPrice {
  constructor(
    public stockName: string,
    public stockSymbol: string,
    public timestamp: Date,
    public priceOpen: number,
    public priceHigh: number,
    public priceLow: number,
    public priceClose: number,
    public volume: number
  ) {}
}
