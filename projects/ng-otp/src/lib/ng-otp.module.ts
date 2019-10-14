import { NgModule } from '@angular/core';
import { NgOtpComponent } from './ng-otp.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgOtpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NgOtpComponent]
})
export class NgOtpModule { }
