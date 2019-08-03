import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgOtpService {

  constructor() { }

  isEmptySting(string: string) {
    return string === '';
  }

  isLastInput(index, limit) {
    return index === limit;
  }

  getElement(index) {
    return document.querySelector<HTMLInputElement>(`#otp-${index}`);
  }
}
