import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavOpened: boolean;
  encapsulation: ViewEncapsulation.None;
  toggleSideNav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
