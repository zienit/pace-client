import { Component, OnInit, Input } from '@angular/core';
import { GrandPrix, Session } from '../event.model';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})
export class EventListItemComponent implements OnInit {

  constructor() { }

  @Input() gp: GrandPrix;

  ngOnInit() {
  }
}
