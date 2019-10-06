import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { map } from 'rxjs/operators';
import { SessionType, GrandPrix } from '../event.model';
import { EventPreviewComponent } from '../event-preview/event-preview.component';
import { MatDialog } from '@angular/material/dialog';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private dialog: MatDialog,
    private eventService: EventService
  ) {
  }

  sessions = new FormArray([]);

  form = new FormGroup({
    name: new FormControl(null),
    country: new FormControl(null),
    timezone: new FormControl(null),
    sessions: this.sessions
  });

  missingSessionTypes: SessionType[] = [];

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => this.eventService.getGrandPrix(paramMap.get('id')))
    ).subscribe(gp => {
      this.updateForm(gp);
      this.missingSessionTypes = this.findMissingSessionTypes();
    });
  }

  private updateForm(gp: GrandPrix) {
    gp.sessions.forEach(s => this.sessions.push(this.createSessionForm()));
    this.form.setValue({
      name: gp.name,
      country: gp.country,
      timezone: gp.timezone,
      sessions: gp.sessions.map(s => {
        return {
          type: s.type,
          date: new Date(Date.UTC(s.date.getUTCFullYear(), s.date.getUTCMonth(), s.date.getUTCDate())),
          time: s.date.getUTCHours() + ':' + ('0' + s.date.getUTCMinutes()).slice(-2)
        }
      })
    });
  }

  createSessionForm() {
    return new FormGroup({
      type: new FormControl(null),
      date: new FormControl(null, Validators.required),
      time: new FormControl(null, [Validators.required, Validators.pattern('\\d{1,2}:\\d{2}')])
    });
  }

  onSubmit() {
    const gp = this.readForm()
    console.log(gp);
  }

  private readForm(): GrandPrix {
    const value = this.form.value;
    return {
      id: null,
      timezone: value.timezone,
      name: value.name,
      country: value.country,
      sessions: value.sessions.map(s => {
        const [all, hours, minutes] = /(\d{1,2}):(\d{2})/.exec(s.time);
        return {
          type: s.type,
          date: new Date(Date.UTC(s.date.getUTCFullYear(), s.date.getUTCMonth(), s.date.getUTCDate(), +hours, +minutes))
        };
      })
    }
  }

  onPreview() {
    this.dialog.open(EventPreviewComponent, {
      data: { grandprix: this.readForm() }
    });
  }

  onDeleteSession(index: number) {
    this.sessions.removeAt(index);
    this.missingSessionTypes = this.findMissingSessionTypes();
  }

  onInsertSession(sessionType: SessionType) {
    const sessionForm = this.createSessionForm();
    sessionForm.get('type').setValue(sessionType);
    const index = this.findSessionTypeInsertionIndex(sessionType);
    if (index === -1) {
      this.sessions.push(sessionForm);
    } else {
      this.sessions.insert(index, sessionForm);
    }
    this.missingSessionTypes = this.findMissingSessionTypes();
  }

  private findMissingSessionTypes() {
    const usedSessionTypes = this.sessions.controls
      .map(c => c.get('type').value);
    return [SessionType.FP1, SessionType.FP2, SessionType.FP3, SessionType.Q1, SessionType.R]
      .filter(t => !usedSessionTypes.includes(t));
  }

  private findSessionTypeInsertionIndex(sessionType: SessionType) {
    return this.sessions.controls
      .findIndex(c => c.get('type').value > sessionType);
  }
}