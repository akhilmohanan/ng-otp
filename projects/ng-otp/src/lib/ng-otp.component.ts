import { Component, Input, OnDestroy, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgOtpService } from './ng-otp.service';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'ng-otp',
  templateUrl: './ng-otp.component.html',
  styleUrls: ['./ng-otp.component.scss']
})
export class NgOtpComponent implements OnInit, OnDestroy {

  private _allowedCharacters: string | RegExp = /./;
  private _typeOfInput: 'text' | 'number' | 'password' = 'text';
  keyboardType: 'numeric' | 'text' = 'text';

  @Input() limit: number;
  @Input() set allowedCharacters(el: string | RegExp) {
    if (el) {
      this._allowedCharacters = el;
    } else {
      this.throwErrorForUndefinedElement(el);
    }
  }

  @Input() set typeOfInput(type: 'text' | 'number' | 'password') {
    if (type) {
      this._typeOfInput = type;
      this.keyboardType = type === 'password' ? 'numeric' : 'text';
    } else {
      this.throwErrorForUndefinedElement(type);
    }
  }

  get typeOfInput(): 'text' | 'number' | 'password' {
    return this._typeOfInput;
  }

  @Output() otpOut = new EventEmitter();

  otpForm: FormGroup;
  private limitArray = [];
  private isKeyAcceptable = true;
  changeFocus$ = new Subject();
  private subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private ngOtpService: NgOtpService
  ) {
    this.subscription.add(this.changeFocus$
      .pipe(
        throttleTime(50)
      ).subscribe(
        (index: number) => { this.changeFocus(index); }
      )
    );
  }

  ngOnInit() {
    this.limit = this.limit ? this.limit : 4;
    this.setFormBuilder();
  }

  setFormBuilder() {
    this.otpForm = this.formBuilder.group({});
    this.limitArray = Array.from(Array(this.limit).keys());
    this.limitArray.map((element) => {
      this.otpForm.addControl(`otp-${element}`, new FormControl('', Validators.required));
    });
  }

  changeFocus(id: number) {
    console.log(this.isKeyAcceptable);
    if (!this.isKeyAcceptable) {
      this.isKeyAcceptable = true;
      return;
    }
    const currentElement: HTMLInputElement = this.ngOtpService.getElement(id);
    if (id && this.ngOtpService.isEmptySting(currentElement.value)) {
      this.moveBackward(id);
    } else if (this.ngOtpService.isLastInput(id, this.limit - 1)) {
      currentElement.select();
      this.otpOut.emit(Object.values(this.otpForm.value).join(''));
    } else if (!this.ngOtpService.isEmptySting(currentElement.value)) {
      this.moveForward(id);
    }
  }

  private moveForward(id: number) {
    const nextElement: HTMLInputElement = this.ngOtpService.getElement(id + 1);
    nextElement.focus();
  }

  private moveBackward(id: number) {
    const nextElement: HTMLInputElement = this.ngOtpService.getElement(id - 1);
    nextElement.focus();
  }

  onFocus(id) {
    const currentElement: HTMLInputElement = this.ngOtpService.getElement(id);
    currentElement.select();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key && (event.key !== 'Backspace' && event.key !== 'Delete')) {
      if (this._allowedCharacters) {
        if (this._allowedCharacters instanceof RegExp) {
          if (!this._allowedCharacters.test(event.key)) {
            this.isKeyAcceptable = false;
            event.preventDefault();
          }
        } else {
          if (!this._allowedCharacters.includes(event.key)) {
            this.isKeyAcceptable = false;
            event.preventDefault();
          }
        }
      }
    }
  }

  private throwErrorForUndefinedElement<T>(element: T) {
    throw new Error(`Is not possibile set ${element} to this parameter`);
  }

}
