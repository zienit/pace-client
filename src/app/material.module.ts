import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatGridListModule, MatPaginatorModule, MatChipsModule, MatProgressSpinnerModule, MatSnackBarModule, MatExpansionModule } from '@angular/material';

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
        MatSnackBarModule,
        MatExpansionModule
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
        MatSnackBarModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }