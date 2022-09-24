import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-outlet',
  templateUrl: './history-outlet.component.html',
  styleUrls: ['./history-outlet.component.sass']
})
export class HistoryOutletComponent {
  arr = [1, 2]
  constructor() {
    this.arr = this.arr
   }
}
