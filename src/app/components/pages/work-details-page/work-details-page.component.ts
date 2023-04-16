import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-work-details-page',
  templateUrl: './work-details-page.component.html',
  styleUrls: ['./work-details-page.component.scss']
})
export class WorkDetailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   OurOfferingSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		margin: 30,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		]
    }

}
