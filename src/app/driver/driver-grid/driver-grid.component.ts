import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriverService } from '../driver.service';
import { Driver } from '../driver.model';
import { PageEvent } from '@angular/material';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-driver-grid',
  templateUrl: './driver-grid.component.html',
  styleUrls: ['./driver-grid.component.css']
})
export class DriverGridComponent implements OnInit, OnDestroy {

  drivers: Driver[];
  pageIndex: number = 0;
  pageSize: number = 0;
  columnCount: Observable<number>;
  resetPagination: Subscription;

  constructor(
    private mediaObserver: MediaObserver,
    private driverService: DriverService
  ) { }

  ngOnInit() {
    this.columnCount = this.mediaObserver.media$.pipe(map(mc => {
      switch (mc.mqAlias) {
        case 'xs':
          return 1;
        case 'sm':
          return 3;
        default:
          return 4;
      }
    }));
    this.drivers = this.driverService.getDrivers();

    // when column count change, reset the pagination so that driver currenly in top-left position remains visible.
    this.resetPagination = this.columnCount.subscribe(cc => {
      if (cc == 1) {
        // paginator is removed
        this.pageIndex = 0;
        this.pageSize = this.drivers.length;

      } else {
        this.pageIndex = Math.floor((this.pageIndex * this.pageSize) / (cc * 2));
        this.pageSize = cc * 2;
      }
    })
  }

  onPage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  ngOnDestroy() {
    this.resetPagination.unsubscribe();
  }
}
