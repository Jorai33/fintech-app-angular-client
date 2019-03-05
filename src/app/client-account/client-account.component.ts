import { Component, OnInit } from "@angular/core";

import { ClientAccountService } from "./client-account.service";
import { ClientAccount } from "./client-account.model";

@Component({
  selector: "app-client-account",
  templateUrl: "./client-account.component.html",
  styleUrls: ["./client-account.component.css"],
  providers: []
})
export class ClientAccountComponent implements OnInit {
  selectedClientAccount: ClientAccount;

  constructor(private clientAccountService: ClientAccountService) {}

  ngOnInit() {
    // this.clientAccountService.clientAccountSelected.subscribe(
    //   (clientAccount: ClientAccount) => {
    //     this.selectedClientAccount = clientAccount;
    //   }
    // );
  }
}
