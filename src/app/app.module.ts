import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventItemComponent,
    NavbarComponent,
  ], // if you want to add Component, Pipe or Directive
  imports: [
    BrowserModule,
    FormsModule,
  ], // imports are used to importing other modules
  providers: [EventService], // services are added as providers
  bootstrap: [AppComponent]
})
export class AppModule { }
