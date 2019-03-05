import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ClientAccount } from "../client-account.model";
import { ClientAccountService } from "../client-account.service";

@Component({
  selector: "app-client-account-dashboard",
  templateUrl: "./client-account-dashboard.component.html",
  styleUrls: ["./client-account-dashboard.component.css"]
})
export class ClientAccountDashboardComponent implements OnInit {
  // clientAccount: ClientAccount;
  // id: number;

  constructor(
    private route: ActivatedRoute // private clientAccountService: ClientAccountService,
  ) {}

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params["id"];
    //   this.clientAccount = this.clientAccountService.getClientAccount(this.id);
    // });
    if (this.route) {
      console.log(
        "The ClientAccountDaschboard - ActivatedRoute -> was activated"
      );
    }
  }
}
