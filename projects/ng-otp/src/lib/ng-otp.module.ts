import { NgModule } from '@angular/core';
import { NgOtpComponent } from './ng-otp.component';

import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgOtpComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [NgOtpComponent]
})
export class NgOtpModule { }
