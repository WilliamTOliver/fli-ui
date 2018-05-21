import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {

  }

}
