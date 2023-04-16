import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accreditations',
  templateUrl: './accreditations.component.html',
  styleUrls: ['./accreditations.component.scss']
})
export class AccreditationsComponent implements OnInit {

 	constructor(
        public router: Router
	) { }

  ngOnInit(): void {
  }

}
