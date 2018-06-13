import { AuthService } from './../shared/auth/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  roles: Array<any> = [
    {
      id: 0,
      displayValue: 'Organizer',
      value: 'organizer',
      isActive: false
    },
    {
      id: 1,
      displayValue: 'Dancer',
      value: 'dancer',
      isActive: false
    },
    {
      id: 2,
      displayValue: 'Performer',
      value: 'Performer',
      isActive: false
    },
  ];
  selectedRoles: Array<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  toggleRole(roleId) {
    console.log(roleId)
    this.roles.map((role) => {
      if (role.id === +roleId) {
        role.isActive = !role.isActive;
      }
    });
  }
}
