import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { Driver } from '../driver.model';

@Component({
  selector: 'app-driver-grid',
  templateUrl: './driver-grid.component.html',
  styleUrls: ['./driver-grid.component.css']
})
export class DriverGridComponent implements OnInit {

  drivers: Driver[];

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.drivers = this.driverService.getDrivers();
  }

}
