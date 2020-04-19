import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderDetailComponent } from './provider-detail.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IntroductionComponent } from './introduction/introduction.component';



@NgModule({
  declarations: [ProviderDetailComponent, HeaderComponent, IntroductionComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProviderDetailModule { }
