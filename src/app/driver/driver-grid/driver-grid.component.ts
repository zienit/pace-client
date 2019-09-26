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

  constructor(
    private readonly mediaObserver: MediaObserver,
    private readonly driverService: DriverService
  ) { }

  private allDrivers: Driver[];
  private readonly driversSubject: BehaviorSubject<Driver[]> = new BehaviorSubject([]);

  readonly filteredDrivers = this.driversSubject.pipe(map(d =>
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

  readonly columnCount: Observable<number> = this.mediaObserver.media$.pipe(map(mc => {
    switch (mc.mqAlias) {
      case 'xs':
        return 1;
      case 'sm':
        return 3;
      default:
        return 4;
    }
  }));

  private readonly resetPagination: Subscription = this.columnCount.subscribe(cc => {
    if (cc == 1) {
      // paginator is removed from DOM
      this.pageIndex = 0;
      this.pageSize = this.allDrivers.length;
    } else {
      // reset the pagination so that item currenly in top-left position remains visible.
      this.pageIndex = Math.floor((this.pageIndex * this.pageSize) / (cc * 2));
      this.pageSize = cc * 2;
    }
    this.driversSubject.next(this.allDrivers);
  });

  ngOnInit() {
    this.driverService.getDrivers().subscribe(d => {
      this.allDrivers = d;
      this.driversSubject.next(d);
      const countries: string[] = d.reduce(
        (countries, driver) => countries.includes(driver.country) ? countries : [...countries, driver.country],
        []
      );
      this.filters = countries.sort().map(c => { return { name: c, selected: false }; });
    });
  }

  onPage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.driversSubject.next(this.allDrivers);
  }

  onChange(countries: string[]) {
    this.selectedCountries = countries;
    this.driversSubject.next(this.allDrivers);
  }

  ngOnDestroy() {
    this.resetPagination.unsubscribe();
  }
}
