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

  allDrivers: Driver[];
  drivers: BehaviorSubject<Driver[]>;
  filteredDriversSize: BehaviorSubject<number>;
  filters: { name: string, selected: boolean }[];
  selectedCountries: string[] = [];
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
    this.allDrivers = this.driverService.getDrivers();
    this.drivers = new BehaviorSubject(this.allDrivers);
    this.filteredDriversSize = new BehaviorSubject(this.allDrivers.length);

    const countries: string[] = this.drivers.value.reduce(
      (countries, driver) => countries.includes(driver.country) ? countries : [...countries, driver.country],
      []
    );
    this.filters = countries.sort().map(c => { return { name: c, selected: false }; });

    // when column count change, reset the pagination so that item currenly in top-left position remains visible.
    this.resetPagination = this.columnCount.subscribe(cc => {
      if (cc == 1) {
        // paginator is removed from DOM
        this.pageIndex = 0;
        this.pageSize = this.drivers.value.length;

      } else {
        this.pageIndex = Math.floor((this.pageIndex * this.pageSize) / (cc * 2));
        this.pageSize = cc * 2;
      }
      this.drivers.next(this.pagedDrivers());
    })
  }

  onPage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.drivers.next(this.pagedDrivers());
  }

  onChange(countries: string[]) {
    console.log(countries);
    console.log(this.filters);
    this.selectedCountries = countries;
    this.drivers.next(this.pagedDrivers());
  }

  private filteredDrivers() {
    const filtered = this.selectedCountries.length == 0
      ? this.allDrivers
      : this.allDrivers.filter(d => this.selectedCountries.includes(d.country));

    // @todo don't do this here as a side-effect !
    this.filteredDriversSize.next(filtered.length);

    return filtered;
  }

  private pagedDrivers() {
    const from = this.pageIndex * this.pageSize;
    const to = from + this.pageSize;
    return this.filteredDrivers().slice(from, to);
  }

  ngOnDestroy() {
    this.resetPagination.unsubscribe();
  }
}
