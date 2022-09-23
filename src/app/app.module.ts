import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './pages/market/market.component';
import { MainComponent } from './pages/main/main.component';
import { PointsComponent } from './pages/points/points.component';
import { UserComponent } from './pages/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { UserPanelComponent } from './components/ui/user-panel/user-panel.component';
import { MapComponent } from './components/ui/map/map.component';
import { MarketPanelComponent } from './components/ui/market-panel/market-panel.component';
import { SearchPanelComponent } from './components/ui/search-panel/search-panel.component';
import { SelectComponent } from './components/ui/select/select.component';
import { SliderComponent } from './components/ui/slider/slider.component';
import { UserNavComponent } from './components/ui/user-nav/user-nav.component';
import { BalanceCardComponent } from './components/cards/balance-card/balance-card.component';
import { FiltersCardComponent } from './components/cards/filters-card/filters-card.component';
import { HistoryCardComponent } from './components/cards/history-card/history-card.component';
import { MainCardComponent } from './components/cards/main-card/main-card.component';
import { MaterialCardComponent } from './components/cards/material-card/material-card.component';
import { PointsCardComponent } from './components/cards/points-card/points-card.component';
import { ProductCardComponent } from './components/cards/product-card/product-card.component';
import { PromoCardComponent } from './components/cards/promo-card/promo-card.component';
import { SliderCardComponent } from './components/cards/slider-card/slider-card.component';
import { UserCardComponent } from './components/cards/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    MainComponent,
    PointsComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    NavbarComponent,
    UserPanelComponent,
    MapComponent,
    MarketPanelComponent,
    SearchPanelComponent,
    SelectComponent,
    SliderComponent,
    UserNavComponent,
    BalanceCardComponent,
    FiltersCardComponent,
    HistoryCardComponent,
    MainCardComponent,
    MaterialCardComponent,
    PointsCardComponent,
    ProductCardComponent,
    PromoCardComponent,
    SliderCardComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [SwiperModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
