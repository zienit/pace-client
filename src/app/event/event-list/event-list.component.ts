import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GrandPrix } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService) { }

  private allGrandsprix: GrandPrix[] = [];

  readonly grandsPrixSubject$ = new BehaviorSubject<GrandPrix[]>([]);
  readonly filteredGrandsPrix$ = this.grandsPrixSubject$.pipe(filter(gp => true));

  ngOnInit() {
    console.log(this.eventService);
    this.eventService.getGrandsPrix().subscribe(gsp => {
      this.allGrandsprix = gsp;
      this.grandsPrixSubject$.next(gsp);
    });
  }
}
