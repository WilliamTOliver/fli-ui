import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  sideNavOpened: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  toggleSideNav() {
    this.sideNavOpened.emit();
  }
}
