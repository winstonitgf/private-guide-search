import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { BannerComponent } from './home/banner/banner.component';
import { FooterComponent } from './home/footer/footer.component';
import { SectionServicesComponent } from './home/section-services/section-services.component';
import { SectionProvidersComponent } from './home/section-providers/section-providers.component';
import { SectionSuccessfulCaseComponent } from './home/section-successful-case/section-successful-case.component';
import { SectionScrollTopComponent } from './section-scroll-top/section-scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    SectionServicesComponent,
    SectionProvidersComponent,
    SectionSuccessfulCaseComponent,
    SectionScrollTopComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
