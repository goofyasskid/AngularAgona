import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.sass']
})
export class MainCardComponent{

  @Input() title: string;
  @Input() text: string ;
  @Input() image: string;
  @Input() link: string;

  constructor(private router: Router) {
    this.title ="";
		this.text ="";
    this.image ="";
    this.link = ""
   }
   goToPage(){
    this.router.navigate([this.link]);
}
}
