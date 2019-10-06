import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GrandPrix } from '../event.model';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { grandprix: GrandPrix }) {
    this.gp = data.grandprix;
  }

  gp: GrandPrix;

  ngOnInit() {
  }

}
