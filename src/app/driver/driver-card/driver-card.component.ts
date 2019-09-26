import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../driver.model';
import { Team } from 'src/app/team/team.model';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {

  @Input() driver : Driver;
  @Input() team : Team;

  constructor() { }

  ngOnInit() {
  }
}
