export class RelationshipManager {
  constructor(
    public name: string,
    public id: string,
    public branch: string,
    public country: string,
    public accountOpenDate: Date,
    public accountCloseDate: Date,
    public numberAccounts: number,
    public numberPortfolios: number,
    public numberBreaches: number,
    public totalManagedMoney: number
  ) {}
}
