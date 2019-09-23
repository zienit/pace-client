import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../driver.model';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {

  @Input() driver : Driver;

  constructor() { }

  ngOnInit() {
  }
}
