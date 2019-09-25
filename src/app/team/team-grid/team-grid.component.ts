import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from '../team.model';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { TeamService } from '../team.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-team-grid',
  templateUrl: './team-grid.component.html',
  styleUrls: ['./team-grid.component.css']
})
export class TeamGridComponent implements OnInit, OnDestroy {

  teams: Team[];
  pageIndex: number = 0;
  pageSize: number = 0;
  columnCount: Observable<number>;
  resetPagination: Subscription;

  constructor(
    private mediaObserver: MediaObserver,
    private teamService: TeamService
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
    this.teams = this.teamService.getTeams();

    // when column count change, reset the pagination so that item currenly in top-left position remains visible.
    this.resetPagination = this.columnCount.subscribe(cc => {
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
