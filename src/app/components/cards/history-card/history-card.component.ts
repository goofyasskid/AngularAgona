import { Component, Input } from '@angular/core';
import { historyInfo } from 'src/app/mocks/historyMock';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.sass']
})
export class HistoryCardComponent  {

  @Input() data_history: Array<any>;
  constructor() {
    this.data_history = historyInfo;
  }
}
