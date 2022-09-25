import { Component, Input } from '@angular/core';
import { pointsInfo } from 'src/app/mocks/pointsMock';

@Component({
  selector: 'app-points-card',
  templateUrl: './points-card.component.html',
  styleUrls: ['./points-card.component.sass']
})
export class PointsCardComponent {
  @Input() points_cards: Array<any>;
  constructor() {
    this.points_cards = pointsInfo;
  }
}
