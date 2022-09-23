import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.sass']
})
export class MainCardComponent{

  @Input() title: string;
  @Input() text: string ;
  @Input() image: string;

  constructor() {
    this.title ="";
		this.text ="";
    this.image ="";
   }


}
