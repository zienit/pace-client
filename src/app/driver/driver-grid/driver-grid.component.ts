import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriverService } from '../driver.service';
import { Driver } from '../driver.model';
import { PageEvent } from '@angular/material';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-driver-grid',
  templateUrl: './driver-grid.component.html',
  styleUrls: ['./driver-grid.component.css']
})
export class DriverGridComponent implements OnInit, OnDestroy {

  private allDrivers: Driver[];
  readonly drivers: BehaviorSubject<Driver[]> = new BehaviorSubject([]);

  readonly filteredDrivers = this.drivers.pipe(map(d =>
    this.selectedCountries.length == 0
      ? d
      : d.filter(d => this.selectedCountries.includes(d.country))
  ));

  readonly pagedDrivers = this.filteredDrivers.pipe(map(d => {
    const from = this.pageIndex * this.pageSize;
    const to = from + this.pageSize;
    return d.slice(from, to);
  }));

  filters: { name: string, selected: boolean }[];
  private selectedCountries: string[] = [];
  pageIndex: number = 0;
  pageSize: number = 0;
  columnCount: Observable<number>;
  private resetPagination: Subscription;
  
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
    
    this.allDrivers = this.driverService.getDrivers();
    this.drivers.next(this.allDrivers);

    const countries: string[] = this.drivers.value.reduce(
      (countries, driver) => countries.includes(driver.country) ? countries : [...countries, driver.country],
      []
    );
    this.filters = countries.sort().map(c => { return { name: c, selected: false }; });

    this.resetPagination = this.columnCount.subscribe(cc => {
      if (cc == 1) {
        // paginator is removed from DOM
        this.pageIndex = 0;
        this.pageSize = this.drivers.value.length;

      } else {
        // reset the pagination so that item currenly in top-left position remains visible.
        this.pageIndex = Math.floor((this.pageIndex * this.pageSize) / (cc * 2));
        this.pageSize = cc * 2;
      }
      this.drivers.next(this.allDrivers);
    })
  }

  onPage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.drivers.next(this.allDrivers);
  }

  onChange(countries: string[]) {
    this.selectedCountries = countries;
    this.drivers.next(this.allDrivers);
  }

  ngOnDestroy() {
    this.resetPagination.unsubscribe();
  }
}
