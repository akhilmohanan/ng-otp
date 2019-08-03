import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgOtpModule } from 'projects/ng-otp/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOtpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
