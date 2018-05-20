import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { BadgeComponent } from './shared/badge/badge.component';
import { EventComponent } from './shared/event/event.component';
import { FilterComponent } from './shared/filter/filter.component';
import { MapComponent } from './shared/map/map.component';
import { SearchComponent } from './shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    BadgeComponent,
    EventComponent,
    FilterComponent,
    MapComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
