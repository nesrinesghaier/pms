import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatNativeDateModule,
} from '@angular/material';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatTabsModule, MatDividerModule, MatSliderModule, MatListModule, MatAutocompleteModule, MatSelectModule,
    MatRadioModule, MatRippleModule, MatSidenavModule, MatSlideToggleModule, MatStepperModule, MatTooltipModule,
    MatProgressBarModule, MatMenuModule,
    MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule,
    MatExpansionModule, MatGridListModule, MatChipsModule, MatButtonToggleModule,
    MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatTabsModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule,
    MatInputModule, MatPaginatorModule, CommonModule],
  exports: [MatTabsModule, MatDividerModule, MatSliderModule, MatListModule, MatAutocompleteModule, MatSelectModule,
    MatRadioModule, MatRippleModule,
    MatSidenavModule, MatSlideToggleModule, MatStepperModule, MatTooltipModule, MatProgressBarModule, MatMenuModule,
    MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule,
    MatExpansionModule, MatGridListModule, MatChipsModule, MatButtonToggleModule,
    MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatTabsModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule,
    MatInputModule, MatPaginatorModule, CommonModule],

})

export class MaterialModule {
}
