import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { productsInfo } from 'src/app/mocks/productMock';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass']
})
export class MarketComponent implements OnInit {

  @Input() data_cards: Array<IProduct>;
  constructor() {
    this.data_cards = productsInfo;
  }

  ngOnInit(): void {
  }

}
