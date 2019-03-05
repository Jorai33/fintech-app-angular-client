import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ClientAccountService } from "../client-account.service";

@Component({
  selector: "app-sidebar-client",
  templateUrl: "./sidebar-client.component.html",
  styleUrls: ["./sidebar-client.component.css"]
})
export class SidebarClientComponent implements OnInit {
  id: number;

  constructor(private clientAccountService: ClientAccountService) {}

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   console.log("Sidebar, route is: ", this.route);
    //   console.log("Sidebar, params is: ", params);
    //   this.id = +params["id"];
    //   console.log("Sidebar, params[id] is: ", params["id"]);
    //   console.log("Sidebar, this.id is: ", this.id);
    // });

    // console.log("Sidebar, params is: ", params);
    this.id = this.clientAccountService.clientAccountSelected;
    console.log("Sidebar, this.id is: ", this.id);
  }
}
