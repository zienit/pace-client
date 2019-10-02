import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { EditTeamComponent } from './team/edit-team/edit-team.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavListComponent } from './nav/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './nav/header/header.component';
import { DriverCardComponent } from './driver/driver-card/driver-card.component';
import { DriverGridComponent } from './driver/driver-grid/driver-grid.component';
import { DriverService } from './driver/driver.service';
import { FlagComponent } from './common/flag/flag.component';
import { TeamCardComponent } from './team/team-card/team-card.component';
import { TeamGridComponent } from './team/team-grid/team-grid.component';
import { TeamService } from './team/team.service';
import { FilterSelectorComponent } from './common/filter-selector/filter-selector.component';
import { BannerComponent } from './common/banner/banner.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventService } from './event/event.service';
import { EventListItemComponent } from './event/event-list-item/event-list-item.component';
import { EventListContentComponent } from './event/event-list-content/event-list-content.component';
import { SessionTypePipe } from './event/session-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditTeamComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent,
    DriverCardComponent,
    DriverGridComponent,
    FlagComponent,
    TeamCardComponent,
    TeamGridComponent,
    FilterSelectorComponent,
    BannerComponent,
    EventListComponent,
    EventListItemComponent,
    EventListContentComponent,
    SessionTypePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    DriverService,
    TeamService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
