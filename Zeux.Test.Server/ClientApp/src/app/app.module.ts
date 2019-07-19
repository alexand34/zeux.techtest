import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from 'src/app/app.auth.interseptor';
import { FirstUpperLetterPipe } from './pipes/FirstUpperLetter.pipe';
import { AssetsService } from './services/assets.service';

@NgModule({
  declarations: [
    AppComponent,
    OpportunitiesComponent,
    MyAssetsComponent,
    HeaderComponent,
    FirstUpperLetterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AssetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
