import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ClientAccountFormComponent } from "./client-account-form/client-account-form.component";
import { ClientAccount } from "../../client-account.model";
import { ClientAccountService } from "../../client-account.service";
import * as fromClientAccountList from "../../../client-account/store/client-account.reducers";

@Component({
  selector: "app-client-account-list",
  templateUrl: "./client-account-list.component.html",
  styleUrls: ["./client-account-list.component.css"]
})
export class ClientAccountListComponent implements OnInit {
  clientAccountListState: Observable<{ clientAccounts: ClientAccount[] }>;

  constructor(
    private clientAccountService: ClientAccountService,
    private store: Store<fromClientAccountList.AppState>,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.clientAccountListState = this.store.select("clientAccountList");
  }

  openFormModal() {
    const modalRef = this.modalService.open(ClientAccountFormComponent);
    modalRef.componentInstance.id = 10; // should be the id

    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
