import { Component } from '@angular/core';

@Component({
  selector: 'app-map-outlet',
  templateUrl: './map-outlet.component.html'
})
export class MapOutletComponent{
  arr = [1, 2, 3, 4, 5]
  constructor() {
    this.arr = this.arr
   }
}
