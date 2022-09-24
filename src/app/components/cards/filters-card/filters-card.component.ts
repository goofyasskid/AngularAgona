import { Component, Input, OnInit } from '@angular/core';
import { filtersInfo } from 'src/app/mocks/filtersMock';

@Component({
  selector: 'app-filters-card',
  templateUrl: './filters-card.component.html',
  styleUrls: ['./filters-card.component.sass']
})
export class FiltersCardComponent {

  @Input() data_filters: Array<any>;
  constructor() {
    this.data_filters = filtersInfo;
  }
}
