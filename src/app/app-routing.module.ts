import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DriverGridComponent } from './driver/driver-grid/driver-grid.component';
import { FlagComponent } from './common/flag/flag.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'team', component: FlagComponent },
    { path: 'driver', component: DriverGridComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }