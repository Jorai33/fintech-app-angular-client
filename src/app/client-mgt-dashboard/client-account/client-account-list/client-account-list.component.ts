import { Component, OnInit } from "@angular/core";

import { ClientAccount } from "../client-account.model";
import { ClientAccountService } from "../client-account.service";

@Component({
  selector: "app-client-account-list",
  templateUrl: "./client-account-list.component.html",
  styleUrls: ["./client-account-list.component.css"]
})
export class ClientAccountListComponent implements OnInit {
  clientAccounts: ClientAccount[];

  constructor(private clientAccountService: ClientAccountService) {}

  ngOnInit() {
    this.clientAccounts = this.clientAccountService.getClientAccounts();
  }
}
