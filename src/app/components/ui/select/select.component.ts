import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent  {

  @Input() title: string;
  @Input() variants: string[]

  constructor() {
    this.title ="";
		this.variants = []
   }
}
