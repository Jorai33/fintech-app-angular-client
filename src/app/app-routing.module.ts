import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MarketComponent } from "./market/market.component";
import { MarketStartComponent } from "./market/market-start/market-start.component";
import { MarketNewsComponent } from "./market/market-news/market-news.component";
import { LiveMarketComponent } from "./market/live-market/live-market.component";
import { ClientAccountComponent } from "./client-account/client-account.component";
import { ClientStartComponent } from "./client-account/client-start/client-start.component";
import { RelationshipManagerComponent } from "./client-account/relationship-manager/relationship-manager.component";
import { LiveMarketDetailComponent } from "./market/live-market/live-market-detail/live-market-detail.component";
import { ClientAccountDashboardComponent } from "./client-account/client-account-dashboard/client-account-dashboard.component";
import { ClientAccountFormComponent } from "./client-account/client-start/client-account-list/client-account-form/client-account-form.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/clients", pathMatch: "full" },
  {
    path: "clients",
    component: ClientAccountComponent,
    children: [
      {
        path: "",
        component: ClientStartComponent,
        pathMatch: "full"
      },
      { path: ":id", component: ClientAccountDashboardComponent }
    ]
  },
  { path: "relationship-manager", component: RelationshipManagerComponent },
  {
    path: "market",
    component: MarketComponent,
    children: [
      { path: "", component: MarketStartComponent, pathMatch: "full" },
      { path: "market-news", component: MarketNewsComponent },
      {
        path: "live-market",
        component: LiveMarketComponent,
        children: [
          {
            path: ":id",
            component: LiveMarketDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
