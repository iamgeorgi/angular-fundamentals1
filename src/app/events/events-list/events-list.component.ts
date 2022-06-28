import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

declare let toastr;

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: {}[];

  constructor(private eventService: EventService) { 
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleItemClick(eventName) {
    toastr.success(eventName)
  }

}
