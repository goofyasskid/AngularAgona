import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-outlet',
  templateUrl: './promo-outlet.component.html',
  styleUrls: ['./promo-outlet.component.sass']
})
export class PromoOutletComponent{
  arr = [1, 2, 3]
  constructor() {
    this.arr = this.arr
   }
}
