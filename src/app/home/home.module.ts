import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SectionProvidersComponent } from './section-providers/section-providers.component';
import { SectionSuccessfulCaseComponent } from './section-successful-case/section-successful-case.component';
import { SectionScrollTopComponent } from './section-scroll-top/section-scroll-top.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    SectionServicesComponent,
    SectionProvidersComponent,
    SectionSuccessfulCaseComponent,
    SectionScrollTopComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class HomeModule { }
