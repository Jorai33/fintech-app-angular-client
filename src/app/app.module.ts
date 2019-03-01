import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MarketComponent } from "./market/market.component";
import { LiveMarketComponent } from "./market/live-market/live-market.component";
import { MarketNewsComponent } from "./market/market-news/market-news.component";
import { MarketNewsListComponent } from "./market/market-news/market-news-list/market-news-list.component";
import { MarketNewsItemComponent } from "./market/market-news/market-news-list/market-news-item/market-news-item.component";
import { MarketNewsDetailComponent } from "./market/market-news/market-news-detail/market-news-detail.component";
import { RelationshipManagerComponent } from "./client-mgt-dashboard/relationship-manager/relationship-manager.component";
import { ClientMgtDashboardComponent } from "./client-mgt-dashboard/client-mgt-dashboard";
import { KycComponent } from "./client-mgt-dashboard/account-detail/kyc/kyc.component";
import { AdvisoryComponent } from "./client-mgt-dashboard/account-detail/advisory/advisory.component";
import { LiveMarketListComponent } from "./market/live-market/live-market-list/live-market-list.component";
import { LiveMarketDetailComponent } from "./market/live-market/live-market-detail/live-market-detail.component";
import { LiveMarketItemComponent } from "./market/live-market/live-market-list/live-market-item/live-market-item.component";
import { AccountDetailComponent } from "./client-mgt-dashboard/account-detail/account-detail.component";
import { AccountListComponent } from "./client-mgt-dashboard/account-list/account-list.component";
import { AccountItemComponent } from "./client-mgt-dashboard/account-list/account-item/account-item.component";

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
    AdvisoryComponent,
    LiveMarketListComponent,
    LiveMarketDetailComponent,
    LiveMarketItemComponent,
    RelationshipManagerComponent,
    ClientMgtDashboardComponent,
    AccountDetailComponent,
    AccountListComponent,
    AccountItemComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
