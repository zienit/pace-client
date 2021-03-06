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
import { SessionDatePipe } from './event/session-date.pipe';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventPreviewComponent } from './event/event-preview/event-preview.component';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

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
    SessionTypePipe,
    SessionDatePipe,
    EventEditComponent,
    EventPreviewComponent
  ],
  entryComponents: [
    EventPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    DriverService,
    TeamService,
    EventService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
