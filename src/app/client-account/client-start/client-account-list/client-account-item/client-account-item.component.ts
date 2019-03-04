import { Component, OnInit, Input } from "@angular/core";

import { ClientAccount } from "../../../client-account.model";

@Component({
  selector: "app-client-account-item",
  templateUrl: "./client-account-item.component.html",
  styleUrls: ["./client-account-item.component.css"]
})
export class ClientAccountItemComponent implements OnInit {
  @Input() clientAccount: ClientAccount;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
