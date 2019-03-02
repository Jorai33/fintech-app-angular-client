import { Component, OnInit, Input } from "@angular/core";

import { ClientAccount } from "../client-account.model";

@Component({
  selector: "app-client-account-detail",
  templateUrl: "./client-account-detail.component.html",
  styleUrls: ["./client-account-detail.component.css"]
})
export class ClientAccountDetailComponent implements OnInit {
  @Input() clientAccount: ClientAccount;

  constructor() {}

  ngOnInit() {}
}
