import { Component, OnInit, Input } from "@angular/core";

import { ClientAccount } from "../../client-account.model";
import { ClientAccountService } from "../../client-account.service";

@Component({
  selector: "app-client-account-item",
  templateUrl: "./client-account-item.component.html",
  styleUrls: ["./client-account-item.component.css"]
})
export class ClientAccountItemComponent implements OnInit {
  @Input() clientAccount: ClientAccount;

  constructor(private clientAccountService: ClientAccountService) {}

  ngOnInit() {}

  onSelected() {
    this.clientAccountService.clientAccountSelected.emit(this.clientAccount);
  }
}
