import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.sass']
})
export class SliderCardComponent implements OnInit {

  @Input() title: string;
  @Input() background: string;
  @Input() text: string;
  @Input() image: string;
  @Input() buttonText: string;

  constructor() {
    this.title = "";
    this.background = "";
    this.text = "";
    this.image = "";
    this.buttonText = "";
  }

  ngOnInit(): void {
  }

}
