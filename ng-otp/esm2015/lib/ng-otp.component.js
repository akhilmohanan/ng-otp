/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgOtpService } from './ng-otp.service';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
export class NgOtpComponent {
    /**
     * @param {?} formBuilder
     * @param {?} ngOtpService
     */
    constructor(formBuilder, ngOtpService) {
        this.formBuilder = formBuilder;
        this.ngOtpService = ngOtpService;
        this.limit = 4;
        this.otpOut = new EventEmitter();
        this.limitArray = [];
        this.changeFocus$ = new Subject();
        this.subscription = new Subscription();
        this.setFormBuilder();
        this.subscription.add(this.changeFocus$
            .pipe(throttleTime(100)).subscribe((/**
         * @param {?} index
         * @return {?}
         */
        (index) => { this.changeFocus(index); })));
    }
    /**
     * @return {?}
     */
    setFormBuilder() {
        this.otpForm = this.formBuilder.group({});
        this.limitArray = Array.from(Array(this.limit).keys());
        this.limitArray.map((/**
         * @param {?} element
         * @return {?}
         */
        (element) => {
            this.otpForm.addControl(`otp-${element}`, new FormControl('', Validators.required));
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    changeFocus(id) {
        /** @type {?} */
        const currentElement = this.ngOtpService.getElement(id);
        if (id && this.ngOtpService.isEmptySting(currentElement.value)) {
            this.moveBackward(id);
        }
        else if (this.ngOtpService.isLastInput(id, this.limit - 1)) {
            currentElement.select();
        }
        else if (!this.ngOtpService.isEmptySting(currentElement.value)) {
            this.moveForward(id);
        }
        this.otpOut.emit(Object.values(this.otpForm.value).join(''));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    moveForward(id) {
        /** @type {?} */
        const nextElement = this.ngOtpService.getElement(id + 1);
        nextElement.focus();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    moveBackward(id) {
        /** @type {?} */
        const nextElement = this.ngOtpService.getElement(id - 1);
        nextElement.focus();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    onFocus(id) {
        /** @type {?} */
        const currentElement = this.ngOtpService.getElement(id);
        currentElement.select();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
NgOtpComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-otp',
                template: "<div [formGroup]=\"otpForm\">\n  <input type=\"tel\" class=\"example-input\" maxlength=\"1\" id=\"otp-{{i}}\"\n          *ngFor=\"let control of limitArray; let i = index\"\n          (keyup)=\"changeFocus$.next(i)\" (focusin)=\"onFocus(i)\"\n          formControlName=\"otp-{{i}}\">\n</div>",
                styles: [".example-input::-moz-selection{background:#fff}.example-input::selection{background:#fff}"]
            }] }
];
/** @nocollapse */
NgOtpComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: NgOtpService }
];
NgOtpComponent.propDecorators = {
    limit: [{ type: Input }],
    otpOut: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgOtpComponent.prototype.limit;
    /** @type {?} */
    NgOtpComponent.prototype.otpOut;
    /** @type {?} */
    NgOtpComponent.prototype.otpForm;
    /** @type {?} */
    NgOtpComponent.prototype.limitArray;
    /** @type {?} */
    NgOtpComponent.prototype.changeFocus$;
    /** @type {?} */
    NgOtpComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    NgOtpComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    NgOtpComponent.prototype.ngOtpService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW90cC8iLCJzb3VyY2VzIjpbImxpYi9uZy1vdHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPOUMsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBVXpCLFlBQ1UsV0FBd0IsRUFDeEIsWUFBMEI7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFWM0IsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU1oQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7YUFDcEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQyxTQUFTOzs7O1FBQ1QsQ0FBQyxLQUFhLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxPQUFPLEVBQUUsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxFQUFVOztjQUNkLGNBQWMsR0FBcUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQ3pFLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM1RCxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDekI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsRUFBVTs7Y0FDZCxXQUFXLEdBQXFCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEVBQVU7O2NBQ2YsV0FBVyxHQUFxQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxFQUFFOztjQUNGLGNBQWMsR0FBcUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQ3pFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBbEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsK1NBQXNDOzthQUV2Qzs7OztZQVRRLFdBQVc7WUFDWCxZQUFZOzs7b0JBV2xCLEtBQUs7cUJBQ0wsTUFBTTs7OztJQURQLCtCQUFtQjs7SUFDbkIsZ0NBQXNDOztJQUV0QyxpQ0FBbUI7O0lBQ25CLG9DQUFnQjs7SUFDaEIsc0NBQTZCOztJQUM3QixzQ0FBa0M7Ozs7O0lBR2hDLHFDQUFnQzs7Ozs7SUFDaEMsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ090cFNlcnZpY2UgfSBmcm9tICcuL25nLW90cC5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1vdHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctb3RwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmctb3RwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdPdHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGxpbWl0ID0gNDtcbiAgQE91dHB1dCgpIG90cE91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBvdHBGb3JtOiBGb3JtR3JvdXA7XG4gIGxpbWl0QXJyYXkgPSBbXTtcbiAgY2hhbmdlRm9jdXMkID0gbmV3IFN1YmplY3QoKTtcbiAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgbmdPdHBTZXJ2aWNlOiBOZ090cFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zZXRGb3JtQnVpbGRlcigpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZCh0aGlzLmNoYW5nZUZvY3VzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRocm90dGxlVGltZSgxMDApXG4gICAgICApLnN1YnNjcmliZShcbiAgICAgICAgKGluZGV4OiBudW1iZXIpID0+IHsgdGhpcy5jaGFuZ2VGb2N1cyhpbmRleCk7IH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2V0Rm9ybUJ1aWxkZXIoKSB7XG4gICAgdGhpcy5vdHBGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gICAgdGhpcy5saW1pdEFycmF5ID0gQXJyYXkuZnJvbShBcnJheSh0aGlzLmxpbWl0KS5rZXlzKCkpO1xuICAgIHRoaXMubGltaXRBcnJheS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMub3RwRm9ybS5hZGRDb250cm9sKGBvdHAtJHtlbGVtZW50fWAsIG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlRm9jdXMoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5uZ090cFNlcnZpY2UuZ2V0RWxlbWVudChpZCk7XG4gICAgaWYgKGlkICYmIHRoaXMubmdPdHBTZXJ2aWNlLmlzRW1wdHlTdGluZyhjdXJyZW50RWxlbWVudC52YWx1ZSkpIHtcbiAgICAgIHRoaXMubW92ZUJhY2t3YXJkKGlkKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmdPdHBTZXJ2aWNlLmlzTGFzdElucHV0KGlkLCB0aGlzLmxpbWl0IC0gMSkpIHtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnNlbGVjdCgpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMubmdPdHBTZXJ2aWNlLmlzRW1wdHlTdGluZyhjdXJyZW50RWxlbWVudC52YWx1ZSkpIHtcbiAgICAgIHRoaXMubW92ZUZvcndhcmQoaWQpO1xuICAgIH1cbiAgICB0aGlzLm90cE91dC5lbWl0KE9iamVjdC52YWx1ZXModGhpcy5vdHBGb3JtLnZhbHVlKS5qb2luKCcnKSk7XG4gIH1cblxuICBtb3ZlRm9yd2FyZChpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV4dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLm5nT3RwU2VydmljZS5nZXRFbGVtZW50KGlkICsgMSk7XG4gICAgbmV4dEVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG1vdmVCYWNrd2FyZChpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV4dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLm5nT3RwU2VydmljZS5nZXRFbGVtZW50KGlkIC0gMSk7XG4gICAgbmV4dEVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG9uRm9jdXMoaWQpIHtcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMubmdPdHBTZXJ2aWNlLmdldEVsZW1lbnQoaWQpO1xuICAgIGN1cnJlbnRFbGVtZW50LnNlbGVjdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG4iXX0=