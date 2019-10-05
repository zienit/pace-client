import { Component, OnInit, Input } from '@angular/core';
import { GrandPrix, Session } from '../event.model';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})
export class EventListItemComponent implements OnInit {

  constructor() { }

  private _gp: GrandPrix;

  from: Date;
  to: Date;

  @Input()
  set gp(gp: GrandPrix) {
    this._gp = gp;
    this.from = gp.sessions.map(s => s.date).reduce((min, date) => date < min ? date : min, new Date(9999, 1, 1));
    this.to = gp.sessions.map(s => s.date).reduce((max, date) => date > max ? date : max, new Date(1900, 1, 1));
  }

  get gp() {
    return this._gp;
  }

  ngOnInit() {
  }
}
