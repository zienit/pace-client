import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { map } from 'rxjs/operators';
import { SessionType, GrandPrix } from '../event.model';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  readonly sessionTypes = SessionType;

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private eventService: EventService
  ) {
  }

  form = new FormGroup({
    name: new FormControl(null),
    country: new FormControl(null),
    sessions: new FormArray([])
  });

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => this.eventService.getGrandPrix(paramMap.get('id')))
    ).subscribe(e => {
      e.sessions.forEach(s => (this.form.get('sessions') as FormArray).push(this.createSessionForm()));
      this.form.setValue({
        name: e.name,
        country: e.country,
        sessions: e.sessions.map(s => {
          return {
            type: s.type,
            date: new Date(Date.UTC(s.date.getUTCFullYear(), s.date.getUTCMonth(), s.date.getUTCDate())),
            time: s.date.getUTCHours() + ':' + ('0' + s.date.getUTCMinutes()).slice(-2)
          }
        })
      });
    });
  }

  createSessionForm() {
    return new FormGroup({
      type: new FormControl(null),
      date: new FormControl(null),
      time: new FormControl(null, Validators.pattern('\\d{1,2}:\\d{2}'))
    });
  }

  onSubmit() {
    const value = this.form.value;
    const gp: GrandPrix = {
      id: null,
      timezone: null,
      name: value.name,
      country: value.country,
      sessions: value.sessions.map(s => {
        const [all, hours, minutes] = /(\d{1,2}):(\d{2})/.exec(s.time);
        console.log(hours);
        console.log(minutes);
        return {
          type: s.type,
          date: new Date(Date.UTC(s.date.getUTCFullYear(), s.date.getUTCMonth(), s.date.getUTCDate(), +hours, +minutes))
        };
      })
    }
    console.log(gp);
  }
}