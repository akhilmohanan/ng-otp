import { OnDestroy, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgOtpService } from './ng-otp.service';
import { Subject, Subscription } from 'rxjs';
export declare class NgOtpComponent implements OnDestroy {
    private formBuilder;
    private ngOtpService;
    limit: number;
    otpOut: EventEmitter<{}>;
    otpForm: FormGroup;
    limitArray: any[];
    changeFocus$: Subject<{}>;
    subscription: Subscription;
    constructor(formBuilder: FormBuilder, ngOtpService: NgOtpService);
    setFormBuilder(): void;
    changeFocus(id: number): void;
    moveForward(id: number): void;
    moveBackward(id: number): void;
    onFocus(id: any): void;
    ngOnDestroy(): void;
}
