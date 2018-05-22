import { AuthService } from './../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isOrganizer: boolean;
  isDancer: boolean;
  isPerformer: boolean;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isOrganizer = this.authService.isOrganizer();
    this.isDancer = this.authService.isDancer();
    this.isPerformer = this.authService.isPerformer();
  }
}
