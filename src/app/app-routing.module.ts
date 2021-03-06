import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DriverGridComponent } from './driver/driver-grid/driver-grid.component';
import { TeamGridComponent } from './team/team-grid/team-grid.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'team', component: TeamGridComponent },
    { path: 'driver', component: DriverGridComponent },
    { path: 'schedule', component: EventListComponent },
    { path: 'admin/event/:id', component: EventEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }