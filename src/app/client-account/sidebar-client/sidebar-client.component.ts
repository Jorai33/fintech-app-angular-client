import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ClientAccountService } from "../client-account.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as fromClientAccountList from "../../client-account/store/client-account.reducers";

@Component({
  selector: "app-sidebar-client",
  templateUrl: "./sidebar-client.component.html",
  styleUrls: ["./sidebar-client.component.css"]
})
export class SidebarClientComponent implements OnInit {
  // selectedClientAccountState: Observable<{
  //   selectedClientAccount: number;
  // }>;
  id: number;

  constructor(
    private store: Store<fromClientAccountList.AppState> // private clientAccountService: ClientAccountService
  ) {}

  ngOnInit() {
    this.store.select("clientAccountList").subscribe(data => {
      console.log("Sidebar, data is: ", data);
      if (data.selectedClientAccount > -1) this.id = data.selectedClientAccount;
    });

    console.log("Sidebar, selected id is: ", this.id);

    // this.selectedClientAccountState = this.store.select(
    //   "selectedClientAccount"
    // );
    // console.log(
    //   "Sidebar, selectedClientAccount is: ",
    //   this.selectedClientAccountState
    // );
    // this.route.params.subscribe((params: Params) => {
    //   console.log("Sidebar, route is: ", this.route);
    //   console.log("Sidebar, params is: ", params);
    //   this.id = +params["id"];
    //   console.log("Sidebar, params[id] is: ", params["id"]);
    //   console.log("Sidebar, this.id is: ", this.id);
    // });
    // console.log("Sidebar, params is: ", params);
    // this.id = this.clientAccountService.clientAccountSelected;
    // console.log("Sidebar, this.id is: ", this.id);
  }
}
