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

  private _groupedSessions: Session[][];

  get groupedSessions(): Session[][] {
    // if (!this._groupedSessions) {
    //   this._groupedSessions = this.gp.sessions.reduce((groups, session) => {
    //     const group = groups.find(g => {
    //       const date = g[0].date;
    //       // just day of the month is good enough
    //       return date.getDate() == session.date.getDate();
    //     })
    //     // not nice mutation!
    //     if (group) {
    //       group.push(session);
    //     } else {
    //       groups.push([session]);
    //     }
    //     console.log(groups);
    //     return groups;
    //   }, [] as Session[][])
    // }
    // return this._groupedSessions;
    return [
      [this.gp.sessions[0],this.gp.sessions[1]],
      [this.gp.sessions[2],this.gp.sessions[3]],
      [this.gp.sessions[4]]
    ];
  }

  ngOnInit() {
  }

}
