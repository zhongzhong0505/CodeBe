import { Component, OnInit, AfterViewInit, ViewChild ,ElementRef} from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-swiper-demo',
  templateUrl: './swiper-demo.component.html',
  styleUrls: ['./swiper-demo.component.css']
})
export class SwiperDemoComponent implements OnInit, AfterViewInit {
  private swiper : Swiper;

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      parallax: true,
      speed: 600,
      loop:true
    });
  }

  constructor() {

  }

  ngOnInit() {

  }
  prev(){
    this.swiper.slidePrev();
  }
  next(){
    this.swiper.slideNext();
  }
}
