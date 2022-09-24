import { Component, Input, OnInit } from '@angular/core';
import { searchItem } from 'src/app/mocks/searchVarMock';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass']
})
export class SearchPanelComponent{
  @Input() data_search: Array<any>;
  constructor() {
    this.data_search = searchItem;
  }
}
