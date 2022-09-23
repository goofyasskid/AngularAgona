import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
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
      },
      {
        path: 'market',
        component: MarketComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
