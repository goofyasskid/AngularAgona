import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsCardComponent } from './components/cards/points-card/points-card.component';
import { ContainerComponent } from './components/container/container.component';
import { HistoryOutletComponent } from './components/ui/outlet/history-outlet/history-outlet.component';
import { MapOutletComponent } from './components/ui/outlet/map-outlet/map-outlet.component';
import { PromoOutletComponent } from './components/ui/outlet/promo-outlet/promo-outlet.component';
import { MainComponent } from './pages/main/main.component';
import { MarketComponent } from './pages/market/market.component';
import { PointsComponent } from './pages/points/points.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'points',
        component: PointsComponent,
        children: [
          { path: 'cardId', component: PointsCardComponent },
          { path: 'cards', component: MapOutletComponent }
        ]
      },
      {
        path: 'market',
        component: MarketComponent,
      },
      {
        path: 'user',
        component: UserComponent,
        children: [
          { path: 'promo', component: PromoOutletComponent },
          { path: 'history', component: HistoryOutletComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
