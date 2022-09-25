import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.sass']
})
export class MaterialCardComponent {

  constructor(private router: Router){}
  goToCard(){
      this.router.navigate(['/points/cardId']);
  }
}
