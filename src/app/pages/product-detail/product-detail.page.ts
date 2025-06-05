import { Component, OnInit, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false,
})
export class ProductDetailPage implements AfterViewInit, OnInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl = document.querySelector('swiper-container') as any;
      if (swiperEl && swiperEl.swiper && swiperEl.swiper.autoplay) {
        swiperEl.swiper.autoplay.start();
      }
    }, 500);
  }
}
