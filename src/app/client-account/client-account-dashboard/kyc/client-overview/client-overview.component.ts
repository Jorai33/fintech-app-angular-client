import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ClientAccountService } from "src/app/client-account/client-account.service";
import { ClientAccount } from "src/app/client-account/client-account.model";
@Component({
  selector: "app-client-overview",
  templateUrl: "./client-overview.component.html",
  styleUrls: ["./client-overview.component.css"]
})
export class ClientOverviewComponent implements OnInit {
  clientAccount: ClientAccount;
  id: number;

  constructor(
    private clientAccountService: ClientAccountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log("Client-Overview, route is: ", this.route);
      console.log("Client-Overview, params is: ", params);
      this.id = +params["id"];
      this.clientAccount = this.clientAccountService.getClientAccount(this.id);
      this.clientAccountService.setClientAccountSelected(this.id);
      console.log("Client-Overview, params[id] is: ", params["id"]);
      console.log("Client-Overview, this.id is: ", this.id);
    });
  }
}
