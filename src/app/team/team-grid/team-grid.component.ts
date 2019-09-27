import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from '../team.model';
import { Observable, Subscription, forkJoin } from 'rxjs';
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

  teams: TeamWithDrivers[];
  pageIndex: number = 0;
  pageSize: number = 0;
  columnCount$: Observable<number>;
  resetPagination: Subscription;

  ngOnInit() {
    this.columnCount$ = this.mediaObserver.media$.pipe(map(mc => {
      switch (mc.mqAlias) {
        case 'xs':
          return 1;
        case 'sm':
          return 3;
        default:
          return 4;
      }
    }));
    // this.teamService.getTeams().subscribe(teams => this.teams = teams);
    forkJoin(
      this.teamService.getTeams(),
      this.driverService.getDrivers()
    ).subscribe(([teams, drivers]) => {
      this.teams = teams.map(team => {
        const teamDrivers = drivers
          .filter(d => team.driverId.includes(d.id));
        return { ...team, drivers: teamDrivers };
      });
    });

    // when column count change, reset the pagination so that item currenly in top-left position remains visible.
    this.resetPagination = this.columnCount$.subscribe(cc => {
      if (cc == 1) {
        // paginator is removed
        this.pageIndex = 0;
        this.pageSize = this.teams.length;

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
