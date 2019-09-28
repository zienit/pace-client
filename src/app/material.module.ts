import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatGridListModule, MatPaginatorModule, MatChipsModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';

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
        MatChipsModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
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
        MatChipsModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ]
})
export class MaterialModule { }