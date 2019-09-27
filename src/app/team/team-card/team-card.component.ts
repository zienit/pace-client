import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team.model';
import { Driver } from 'src/app/driver/driver.model';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  @Input() team: Team;
  @Input() drivers: Driver[];

  constructor() { }

  ngOnInit() {
  }

}
