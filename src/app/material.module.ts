import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule
    ]
})
export class MaterialModule { }