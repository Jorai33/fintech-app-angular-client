import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MarketComponent } from "./market/market.component";
import { LiveMarketComponent } from "./market/live-market/live-market.component";
import { MarketNewsComponent } from "./market/market-news/market-news.component";
import { MarketNewsListComponent } from "./market/market-news/market-news-list/market-news-list.component";
import { MarketNewsItemComponent } from "./market/market-news/market-news-list/market-news-item/market-news-item.component";
import { MarketNewsDetailComponent } from "./market/market-news/market-news-detail/market-news-detail.component";
import { RelationshipManagerComponent } from "./client-account/relationship-manager/relationship-manager.component";
import { KycComponent } from "./client-account/client-account-dashboard/kyc/kyc.component";
import { PortfolioManagementComponent } from "./client-account/client-account-dashboard/portfolio-management/portfolio-management.component";
import { LiveMarketListComponent } from "./market/live-market/live-market-list/live-market-list.component";
import { LiveMarketDetailComponent } from "./market/live-market/live-market-detail/live-market-detail.component";
import { LiveMarketItemComponent } from "./market/live-market/live-market-list/live-market-item/live-market-item.component";
import { ClientAccountDashboardComponent } from "./client-account/client-account-dashboard/client-account-dashboard.component";
import { ClientAccountListComponent } from "./client-account/client-start/client-account-list/client-account-list.component";
import { ClientAccountItemComponent } from "./client-account/client-start/client-account-list/client-account-item/client-account-item.component";
import { ClientAccountComponent } from "./client-account/client-account.component";
import { ClientAccountFormComponent } from "./client-account/client-start/client-account-list/client-account-form/client-account-form.component";
import { ClientAccountService } from "./client-account/client-account.service";
import { MarketStartComponent } from "./market/market-start/market-start.component";
import { ClientStartComponent } from "./client-account/client-start/client-start.component";
import { SidebarClientComponent } from "./client-account/sidebar-client/sidebar-client.component";
import { AppRoutingModule } from "./app-routing.module";
import { ClientOverviewComponent } from "./client-account/client-account-dashboard/kyc/client-overview/client-overview.component";
import { AccountHolderComponent } from "./client-account/client-account-dashboard/kyc/account-holder/account-holder.component";
import { ExperienceLevelComponent } from "./client-account/client-account-dashboard/kyc/experience-level/experience-level.component";
import { FinancialSituationComponent } from "./client-account/client-account-dashboard/kyc/financial-situation/financial-situation.component";
import { DocumentComponent } from "./client-account/client-account-dashboard/document/document.component";
import { PortfolioMonitorComponent } from "./client-account/client-account-dashboard/portfolio-management/portfolio-monitor/portfolio-monitor.component";
import { PortfolioCompositionComponent } from "./client-account/client-account-dashboard/portfolio-management/portfolio-composition/portfolio-composition.component";
import { PortfolioSimulationComponent } from "./client-account/client-account-dashboard/portfolio-management/portfolio-simulation/portfolio-simulation.component";
import { clientAccountReducer } from "./client-account/store/client-account.reducers";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { SidebarMarketComponent } from './market/sidebar-market/sidebar-market.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketComponent,
    LiveMarketComponent,
    MarketNewsComponent,
    MarketNewsListComponent,
    MarketNewsItemComponent,
    MarketNewsDetailComponent,
    KycComponent,
    PortfolioManagementComponent,
    LiveMarketListComponent,
    LiveMarketDetailComponent,
    LiveMarketItemComponent,
    RelationshipManagerComponent,
    ClientAccountDashboardComponent,
    ClientAccountListComponent,
    ClientAccountItemComponent,
    ClientAccountComponent,
    ClientAccountFormComponent,
    MarketStartComponent,
    ClientStartComponent,
    SidebarClientComponent,
    ClientOverviewComponent,
    AccountHolderComponent,
    ExperienceLevelComponent,
    FinancialSituationComponent,
    DocumentComponent,
    PortfolioMonitorComponent,
    PortfolioCompositionComponent,
    PortfolioSimulationComponent,
    SidebarMarketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    StoreModule.forRoot({ clientAccountList: clientAccountReducer }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [NgbActiveModal, ClientAccountService],
  bootstrap: [AppComponent],
  entryComponents: [ClientAccountFormComponent]
})
export class AppModule {}
