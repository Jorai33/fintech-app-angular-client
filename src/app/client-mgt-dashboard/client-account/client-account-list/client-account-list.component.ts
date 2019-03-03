import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { ClientAccountFormComponent } from "./client-account-form/client-account-form.component";
import { ClientAccount } from "../client-account.model";
import { ClientAccountService } from "../client-account.service";

@Component({
  selector: "app-client-account-list",
  templateUrl: "./client-account-list.component.html",
  styleUrls: ["./client-account-list.component.css"]
})
export class ClientAccountListComponent implements OnInit {
  clientAccounts: ClientAccount[];

  constructor(
    private clientAccountService: ClientAccountService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.clientAccounts = this.clientAccountService.getClientAccounts();
    this.clientAccountService.clientAccountsChanged.subscribe(
      (clientAccounts: ClientAccount[]) => {
        this.clientAccounts = clientAccounts;
      }
    );
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
