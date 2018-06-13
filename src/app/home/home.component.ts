import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RoleComponent } from '../shared/role/role.component';

@Component({
  selector: 'cd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 10;
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
