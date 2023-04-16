import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-style-two-page',
  templateUrl: './work-style-two-page.component.html',
  styleUrls: ['./work-style-two-page.component.scss']
})
export class WorkStyleTwoPageComponent implements OnInit {

 constructor(
        public router: Router
	) { }

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
