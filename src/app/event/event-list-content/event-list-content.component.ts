import { Component, OnInit, Input } from '@angular/core';
import { Session, GrandPrix } from '../event.model';

@Component({
  selector: 'app-event-list-content',
  templateUrl: './event-list-content.component.html',
  styleUrls: ['./event-list-content.component.css']
})
export class EventListContentComponent implements OnInit {

  private groupedSessions: Session[][];

  @Input() set gp(gp: GrandPrix) {
    this.groupedSessions = gp.sessions.reduce((groups, session) => {
      const index = groups.findIndex(g => {
        const date = g[0].date;
        // group on day of the month
        return date.getDate() == session.date.getDate();
      })
      if (index !== -1) {
        return [...groups.slice(0, index), [...groups[index], session], ...groups.slice(index + 1)];
        // group.push(session);
      } else {
        return [...groups, [session]];
        // groups.push([session]);
      }
      // return groups;
    }, [] as Session[][])
  }

  constructor() { }

  ngOnInit() {
  }

}
