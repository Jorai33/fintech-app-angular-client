import { EventEmitter } from "@angular/core";

import { ClientAccount } from "./client-account.model";

export class ClientAccountService {
  clientAccountsChanged = new EventEmitter<ClientAccount[]>();
  clientAccountSelected: number;

  private clientAccounts: ClientAccount[] = [
    new ClientAccount(
      "Parnaiashu Costel",
      "560321",
      "Switzerland",
      "Private Individual",
      "Live",
      "CHF",
      new Date("2019-02-28T12:17:57Z"),
      null,
      2,
      10,
      300000
    ),
    new ClientAccount(
      "Zavastia Krantz",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    ),
    new ClientAccount(
      "Zavastia Krantz",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    ),
    new ClientAccount(
      "Zavastia Krantz",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    ),
    new ClientAccount(
      "Zavastia Krantz",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    ),
    new ClientAccount(
      "Zavastia Krantz",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    ),
    new ClientAccount(
      "Zavastia Krantz",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    ),
    new ClientAccount(
      "Zavastia Krantz",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    ),
    new ClientAccount(
      "Zavastia Krantz",
      "453767",
      "Bangladesh",
      "Private Individual",
      "Prospect",
      "USD",
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    )
  ];

  setClientAccountSelected(id: number) {
    this.clientAccountSelected = id;
  }

  getClientAccount(index: number) {
    return this.clientAccounts[index];
  }
}
