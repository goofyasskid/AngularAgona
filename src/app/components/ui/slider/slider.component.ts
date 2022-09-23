import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Autoplay, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {
  config: SwiperOptions = {
    spaceBetween: 0,
    navigation: true,
    slidesPerView: 1,
    autoplay: true
  }
}
