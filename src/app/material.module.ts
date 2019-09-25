import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatGridListModule, MatPaginatorModule, MatChipsModule } from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatPaginatorModule,
        MatChipsModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatPaginatorModule,
        MatChipsModule
    ]
})
export class MaterialModule { }