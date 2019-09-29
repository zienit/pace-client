import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriverService } from '../driver.service';
import { Driver } from '../driver.model';
import { PageEvent, MatSnackBar } from '@angular/material';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription, BehaviorSubject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamService } from 'src/app/team/team.service';
import { Team } from 'src/app/team/team.model';

interface DriverWithTeam extends Driver {
  team: Team;
};

@Component({
  selector: 'app-driver-grid',
  templateUrl: './driver-grid.component.html',
  styleUrls: ['./driver-grid.component.css']
})
export class DriverGridComponent implements OnInit, OnDestroy {

  constructor(
    private readonly mediaObserver: MediaObserver,
    private readonly driverService: DriverService,
    private readonly teamService: TeamService,
    private readonly snackbar: MatSnackBar
  ) { }

  private allDrivers: DriverWithTeam[] = [];
  private readonly driversSubject$: BehaviorSubject<Driver[]> = new BehaviorSubject([]);

  readonly filteredDrivers$: Observable<Driver[]> = this.driversSubject$.pipe(map(d =>
    this.selectedCountries.length == 0
      ? d
      : d.filter(d => this.selectedCountries.includes(d.country))
  ));

  readonly pagedDrivers$: Observable<Driver[]> = this.filteredDrivers$.pipe(map(d => {
    const from = this.pageIndex * this.pageSize;
    const to = from + this.pageSize;
    return d.slice(from, to);
  }));

  filters: { name: string, selected: boolean }[];
  private selectedCountries: string[] = [];
  pageIndex: number = 0;
  pageSize: number = 0;
  isLoading = true;
  error: string = null;

  readonly columnCount$: Observable<number> = this.mediaObserver.media$.pipe(map(mc => {
    switch (mc.mqAlias) {
      case 'xs':
        return 2;
      case 'sm':
        return 4;
      default:
        return 5;
    }
  }));

  private readonly resetPagination: Subscription = this.columnCount$.subscribe(cc => {
    if (cc == 2) {
      // paginator is removed from DOM
      this.pageIndex = 0;
      this.pageSize = this.allDrivers.length;
    } else {
      // reset the pagination so that item currenly in top-left position remains visible.
      this.pageIndex = Math.floor((this.pageIndex * this.pageSize) / (cc * 2));
      this.pageSize = cc * 2;
    }
    this.driversSubject$.next(this.allDrivers);
  });

  ngOnInit() {
    this.load();
  }

  private load() {
    this.isLoading = true;
    forkJoin(
      this.driverService.getDrivers(),
      this.teamService.getTeams()
    ).subscribe(([drivers, teams]) => {
      this.allDrivers = drivers.map(driver => {
        const team = teams.find(t => t.id === driver.teamId);
        return { ...driver, team: team };
      });
      this.driversSubject$.next(drivers);
      const countries: string[] = drivers.reduce(
        (countries, driver) => countries.includes(driver.country) ? countries : [...countries, driver.country],
        []
      );
      this.filters = countries.sort().map(c => { return { name: c, selected: false }; });
      this.isLoading = false;
      this.snackbar.open(`Loaded ${this.allDrivers.length} drivers`, null, { duration: 2000 });
    }, err => {
      this.isLoading = false;
      this.error = err.message;
    });
  }

  onRetry() {
    this.error = null;
    this.load();
  }

  onPage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.driversSubject$.next(this.allDrivers);
  }

  onChange(countries: string[]) {
    this.selectedCountries = countries;
    this.driversSubject$.next(this.allDrivers);
  }

  ngOnDestroy() {
    this.resetPagination.unsubscribe();
  }
}
