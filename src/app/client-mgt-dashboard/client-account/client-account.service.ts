import { ClientAccount } from "./client-account.model";

import { EventEmitter } from "@angular/core";

export class ClientAccountService {
  clientAccountSelected = new EventEmitter<ClientAccount>();

  private clientAccounts: ClientAccount[] = [
    new ClientAccount(
      "Parnaiashu Costel",
      "560321",
      "Switzerland",
      "Private Individual",
      "Live",
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
      new Date("2019-01-02T12:17:57Z"),
      null,
      3,
      2,
      5000000
    )
  ];

  getClientAccounts() {
    return this.clientAccounts.slice();
  }
}
