import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { CriteriaSectionComponent } from './criteria-section/criteria-section.component';
import { LoadingAnimateSectionComponent } from './loading-animate-section/loading-animate-section.component';
import { ResultSectionComponent } from './result-section/result-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SearchComponent,
    CriteriaSectionComponent,
    LoadingAnimateSectionComponent,
    ResultSectionComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
  ],
  exports: [
  ]
})
export class SearchModule { }
