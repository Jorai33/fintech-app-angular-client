import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MarketComponent } from "./market/market.component";
import { MarketStartComponent } from "./market/market-start/market-start.component";
import { MarketNewsComponent } from "./market/market-news/market-news.component";
import { ClientAccountComponent } from "./client-account/client-account.component";
import { ClientStartComponent } from "./client-account/client-start/client-start.component";
import { RelationshipManagerComponent } from "./client-account/relationship-manager/relationship-manager.component";
import { ClientAccountDashboardComponent } from "./client-account/client-account-dashboard/client-account-dashboard.component";
import { AccountHolderComponent } from "./client-account/client-account-dashboard/kyc/account-holder/account-holder.component";
import { ExperienceLevelComponent } from "./client-account/client-account-dashboard/kyc/experience-level/experience-level.component";
import { FinancialSituationComponent } from "./client-account/client-account-dashboard/kyc/financial-situation/financial-situation.component";
import { ClientOverviewComponent } from "./client-account/client-account-dashboard/kyc/client-overview/client-overview.component";
import { PortfolioCompositionComponent } from "./client-account/client-account-dashboard/portfolio-management/portfolio-composition/portfolio-composition.component";
import { PortfolioMonitorComponent } from "./client-account/client-account-dashboard/portfolio-management/portfolio-monitor/portfolio-monitor.component";
import { PortfolioSimulationComponent } from "./client-account/client-account-dashboard/portfolio-management/portfolio-simulation/portfolio-simulation.component";
import { BondLiveMarketListComponent } from "./market/live-market/bond/bond-live-market-list/bond-live-market-list.component";
import { StockLiveMarketListComponent } from "./market/live-market/stock/stock-live-market-list/stock-live-market-list.component";
import { StockLiveMarketDetailComponent } from "./market/live-market/stock/stock-live-market-detail/stock-live-market-detail.component";
import { BondLiveMarketDetailComponent } from "./market/live-market/bond/bond-live-market-detail/bond-live-market-detail.component";
import { CurrencyLiveMarketListComponent } from "./market/live-market/currency/currency-live-market-list/currency-live-market-list.component";
import { CurrencyLiveMarketDetailComponent } from "./market/live-market/currency/currency-live-market-detail/currency-live-market-detail.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/client", pathMatch: "full" },
  {
    path: "client",
    component: ClientAccountComponent,
    children: [
      {
        path: "",
        component: ClientStartComponent,
        pathMatch: "full"
      },
      {
        path: "account",
        component: ClientAccountDashboardComponent,
        children: [
          {
            path: ":id/client-overview",
            component: ClientOverviewComponent
          },
          {
            path: ":id/account-holder",
            component: AccountHolderComponent
          },
          {
            path: ":id/experience-level",
            component: ExperienceLevelComponent
          },
          {
            path: ":id/financial-situation",
            component: FinancialSituationComponent
          },
          {
            path: ":id/portfolio-composition",
            component: PortfolioCompositionComponent
          },
          {
            path: ":id/portfolio-monitor",
            component: PortfolioMonitorComponent
          },
          {
            path: ":id/portfolio-simulation",
            component: PortfolioSimulationComponent
          }
        ]
      }
    ]
  },
  { path: "relationship-manager", component: RelationshipManagerComponent },
  {
    path: "market",
    component: MarketStartComponent,

    children: [
      { path: "", redirectTo: "/market/stock", pathMatch: "full" },
      {
        path: "stock",
        component: StockLiveMarketListComponent,
        children: [
          {
            path: ":id",
            component: StockLiveMarketDetailComponent
          }
        ]
      },
      {
        path: "bond",
        component: BondLiveMarketListComponent,
        children: [
          {
            path: ":id",
            component: BondLiveMarketDetailComponent
          }
        ]
      },
      {
        path: "currency",
        component: CurrencyLiveMarketListComponent,
        children: [
          {
            path: ":id",
            component: CurrencyLiveMarketDetailComponent
          }
        ]
      },
      { path: "news", component: MarketNewsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
