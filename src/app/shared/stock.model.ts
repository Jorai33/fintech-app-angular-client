export interface Security {
  name: string;
  symbol: string;
}

export class Stock implements Security {
  constructor(public name: string, public symbol: string) {}
}
