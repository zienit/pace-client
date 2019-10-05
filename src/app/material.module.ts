import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatGridListModule, MatPaginatorModule, MatChipsModule, MatProgressSpinnerModule, MatSnackBarModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

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
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
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
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class MaterialModule { }