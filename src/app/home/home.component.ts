import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RoleComponent } from '../shared/role/role.component';

@Component({
  selector: 'cd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {


  }
  ngAfterViewInit() {
    // if (localStorage.getItem('hasSeen') !== 'true') {
      setTimeout(() => { // FIXME: This is due to a current problem with some material2 components
        // SEE https://github.com/angular/angular/issues/15634
        const dialogRef = this.dialog.open(RoleComponent, {
          width: '15rem'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          localStorage.setItem('hasSeen', 'true');
        });
      }, 0);
    // }
  }



}
