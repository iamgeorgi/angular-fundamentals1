import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event: any

  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am'
    return {bold: isEarlyStart}
  }

}
