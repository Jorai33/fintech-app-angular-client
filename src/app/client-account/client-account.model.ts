export class ClientAccount {
  constructor(
    public name: string,
    public id: string,
    public country: string,
    public entity: string,
    public state: string,
    public referenceCurrency: string,
    public accountOpenDate: Date,
    public accountCloseDate: Date,
    public numberPortfolios,
    public numberBreaches,
    public totalInvestedMoney: number
  ) {}
}
