import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HistoryOutletComponent } from './components/ui/outlet/history-outlet/history-outlet.component';
import { PromoOutletComponent } from './components/ui/outlet/promo-outlet/promo-outlet.component';
import { MapOutletComponent } from './components/ui/outlet/map-outlet/map-outlet.component';
import { CommonModule } from '@angular/common';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { UrlInterceptorService } from './services/url-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';

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
    UserCardComponent,
    HistoryOutletComponent,
    PromoOutletComponent,
    MapOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [SwiperModule],
    LeafletModule,
    OverlayModule,
    PortalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      positionClass: 'toast-bottom-center'
    }),
    ToastContainerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
