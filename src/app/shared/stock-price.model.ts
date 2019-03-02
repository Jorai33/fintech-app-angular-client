export class StockPrice {
  constructor(
    public name: string,
    public symbol: string,
    public timestamp: Date,
    public priceOpen: number,
    public priceHigh: number,
    public priceLow: number,
    public priceClose: number,
    public volume: number
  ) {}
}
