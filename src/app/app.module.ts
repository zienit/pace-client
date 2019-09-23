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

@NgModule({
  declarations: [
    AppComponent,
    EditTeamComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent,
    DriverCardComponent,
    DriverGridComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
