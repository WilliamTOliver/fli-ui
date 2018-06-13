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
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }
}
