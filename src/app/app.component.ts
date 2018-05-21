import { Component } from '@angular/core';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavOpened: boolean;
  toggleSideNav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
