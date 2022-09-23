import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {
  @Input() title: string;
  @Input() brand: string ;
  @Input() image: string;
  @Input() category: string ;
  @Input() price: string;

  constructor() {
    this.title ="";
		this.brand ="";
    this.image ="";
    this.category = "";
    this.price = "";
   }
}
