import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  otp: string;
  characters = 'abcdefghijklmnopqrstuvwxyz';

  setOtp(otp: string) {
    this.otp = otp;
  }

}
