export class StockPrice {
  constructor(
    public priceClose: number,
    public priceHigh: number,
    public priceLow: number,
    public priceOpen: number,
    public stockName: string,
    public stockSymbol: string,
    public timestamp: Date,
    public volume: number
  ) {}
}
