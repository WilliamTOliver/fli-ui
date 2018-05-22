import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isOrganizer() {
    return this.checkRole('organizer');
  }
  public isDancer() {
    return this.checkRole('dancer');
  }
  public isPerformer() {
    return this.checkRole('performer');
  }
  private checkRole(role) {
    return localStorage.getItem('role') === role;
  }

}
