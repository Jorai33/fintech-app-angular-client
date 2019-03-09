import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";

import { ClientAccount } from "../../../client-account.model";
import * as ClientAccountActions from "../../../store/client-account.action";
import * as fromClientAccountList from "../../../../client-account/store/client-account.reducers";

@Component({
  selector: "app-client-account-item",
  templateUrl: "./client-account-item.component.html",
  styleUrls: ["./client-account-item.component.css"]
})
export class ClientAccountItemComponent implements OnInit {
  @Input() clientAccount: ClientAccount;
  @Input() index: number;

  constructor(private store: Store<fromClientAccountList.AppState>) {}

  ngOnInit() {}

  onClientAccountSelection(id: number) {
    console.log("Account-item, selected index is: ", id);
    this.store.dispatch(new ClientAccountActions.SelectClientAccount(id));
  }
}
