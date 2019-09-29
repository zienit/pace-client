import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from '../team.model';
import { Observable, Subscription, forkJoin, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { TeamService } from '../team.service';
import { PageEvent } from '@angular/material';
import { DriverService } from 'src/app/driver/driver.service';
import { Driver } from 'src/app/driver/driver.model';

interface TeamWithDrivers extends Team {
  drivers: Driver[];
};

@Component({
  selector: 'app-team-grid',
  templateUrl: './team-grid.component.html',
  styleUrls: ['./team-grid.component.css']
})
export class TeamGridComponent implements OnInit, OnDestroy {

  constructor(
    private readonly mediaObserver: MediaObserver,
    private readonly teamService: TeamService,
    private readonly driverService: DriverService
  ) { }

  allTeams: TeamWithDrivers[] = [];
  private readonly teamsSubject$: BehaviorSubject<Team[]> = new BehaviorSubject([]);

  readonly pagedTeams$: Observable<Team[]> = this.teamsSubject$.pipe(map(t => {
    const from = this.pageIndex * this.pageSize;
    const to = from + this.pageSize;
    return t.slice(from, to);
  }));

  pageIndex: number = 0;
  pageSize: number = 0;
  isLoading = true;
  error: string = null;

  readonly columnCount$: Observable<number> = this.mediaObserver.media$.pipe(map(mc => {
    switch (mc.mqAlias) {
      case 'xs':
        return 1;
      case 'sm':
        return 3;
      default:
        return 4;
    }
  }));
  private readonly resetPagination: Subscription = this.columnCount$.subscribe(cc => {
    if (cc == 1) {
      // paginator is removed
      this.pageIndex = 0;
      this.pageSize = this.allTeams.length;

    } else {
      this.pageIndex = Math.floor((this.pageIndex * this.pageSize) / (cc * 2));
      this.pageSize = cc * 2;
    }
    this.teamsSubject$.next(this.allTeams);
  });

  ngOnInit() {
    this.load();
  }

  load() {
    this.isLoading = true;
    forkJoin(
      this.teamService.getTeams(),
      this.driverService.getDrivers()
    ).subscribe(([teams, drivers]) => {
      this.allTeams = teams.map(team => {
        const teamDrivers = drivers
          .filter(d => team.driverId.includes(d.id));
        return { ...team, drivers: teamDrivers };
      });
      this.teamsSubject$.next(this.allTeams);
      this.isLoading = false;
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
    this.teamsSubject$.next(this.allTeams);
  }

  ngOnDestroy() {
    this.resetPagination.unsubscribe();
  }
}
