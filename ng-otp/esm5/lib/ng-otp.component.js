/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgOtpService } from './ng-otp.service';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
var NgOtpComponent = /** @class */ (function () {
    function NgOtpComponent(formBuilder, ngOtpService) {
        var _this = this;
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
        function (index) { _this.changeFocus(index); })));
    }
    /**
     * @return {?}
     */
    NgOtpComponent.prototype.setFormBuilder = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.otpForm = this.formBuilder.group({});
        this.limitArray = Array.from(Array(this.limit).keys());
        this.limitArray.map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.otpForm.addControl("otp-" + element, new FormControl('', Validators.required));
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgOtpComponent.prototype.changeFocus = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var currentElement = this.ngOtpService.getElement(id);
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
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgOtpComponent.prototype.moveForward = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var nextElement = this.ngOtpService.getElement(id + 1);
        nextElement.focus();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgOtpComponent.prototype.moveBackward = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var nextElement = this.ngOtpService.getElement(id - 1);
        nextElement.focus();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgOtpComponent.prototype.onFocus = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var currentElement = this.ngOtpService.getElement(id);
        currentElement.select();
    };
    /**
     * @return {?}
     */
    NgOtpComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    NgOtpComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-otp',
                    template: "<div [formGroup]=\"otpForm\">\n  <input type=\"tel\" class=\"example-input\" maxlength=\"1\" id=\"otp-{{i}}\"\n          *ngFor=\"let control of limitArray; let i = index\"\n          (keyup)=\"changeFocus$.next(i)\" (focusin)=\"onFocus(i)\"\n          formControlName=\"otp-{{i}}\">\n</div>",
                    styles: [".example-input::-moz-selection{background:#fff}.example-input::selection{background:#fff}"]
                }] }
    ];
    /** @nocollapse */
    NgOtpComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: NgOtpService }
    ]; };
    NgOtpComponent.propDecorators = {
        limit: [{ type: Input }],
        otpOut: [{ type: Output }]
    };
    return NgOtpComponent;
}());
export { NgOtpComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW90cC8iLCJzb3VyY2VzIjpbImxpYi9uZy1vdHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUM7SUFlRSx3QkFDVSxXQUF3QixFQUN4QixZQUEwQjtRQUZwQyxpQkFZQztRQVhTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBVjNCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZO2FBQ3BDLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUMsU0FBUzs7OztRQUNULFVBQUMsS0FBYSxJQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx1Q0FBYzs7O0lBQWQ7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLE9BQU87WUFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBTyxPQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksRUFBVTs7WUFDZCxjQUFjLEdBQXFCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUN6RSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUQsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLEVBQVU7O1lBQ2QsV0FBVyxHQUFxQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHFDQUFZOzs7O0lBQVosVUFBYSxFQUFVOztZQUNmLFdBQVcsR0FBcUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsRUFBRTs7WUFDRixjQUFjLEdBQXFCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUN6RSxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsK1NBQXNDOztpQkFFdkM7Ozs7Z0JBVFEsV0FBVztnQkFDWCxZQUFZOzs7d0JBV2xCLEtBQUs7eUJBQ0wsTUFBTTs7SUE0RFQscUJBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQS9EWSxjQUFjOzs7SUFFekIsK0JBQW1COztJQUNuQixnQ0FBc0M7O0lBRXRDLGlDQUFtQjs7SUFDbkIsb0NBQWdCOztJQUNoQixzQ0FBNkI7O0lBQzdCLHNDQUFrQzs7Ozs7SUFHaEMscUNBQWdDOzs7OztJQUNoQyxzQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nT3RwU2VydmljZSB9IGZyb20gJy4vbmctb3RwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLW90cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1vdHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1vdHAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ090cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgbGltaXQgPSA0O1xuICBAT3V0cHV0KCkgb3RwT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG90cEZvcm06IEZvcm1Hcm91cDtcbiAgbGltaXRBcnJheSA9IFtdO1xuICBjaGFuZ2VGb2N1cyQgPSBuZXcgU3ViamVjdCgpO1xuICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBuZ090cFNlcnZpY2U6IE5nT3RwU2VydmljZVxuICApIHtcbiAgICB0aGlzLnNldEZvcm1CdWlsZGVyKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKHRoaXMuY2hhbmdlRm9jdXMkXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDEwMClcbiAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAoaW5kZXg6IG51bWJlcikgPT4geyB0aGlzLmNoYW5nZUZvY3VzKGluZGV4KTsgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzZXRGb3JtQnVpbGRlcigpIHtcbiAgICB0aGlzLm90cEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTtcbiAgICB0aGlzLmxpbWl0QXJyYXkgPSBBcnJheS5mcm9tKEFycmF5KHRoaXMubGltaXQpLmtleXMoKSk7XG4gICAgdGhpcy5saW1pdEFycmF5Lm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5vdHBGb3JtLmFkZENvbnRyb2woYG90cC0ke2VsZW1lbnR9YCwgbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VGb2N1cyhpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLm5nT3RwU2VydmljZS5nZXRFbGVtZW50KGlkKTtcbiAgICBpZiAoaWQgJiYgdGhpcy5uZ090cFNlcnZpY2UuaXNFbXB0eVN0aW5nKGN1cnJlbnRFbGVtZW50LnZhbHVlKSkge1xuICAgICAgdGhpcy5tb3ZlQmFja3dhcmQoaWQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZ090cFNlcnZpY2UuaXNMYXN0SW5wdXQoaWQsIHRoaXMubGltaXQgLSAxKSkge1xuICAgICAgY3VycmVudEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5uZ090cFNlcnZpY2UuaXNFbXB0eVN0aW5nKGN1cnJlbnRFbGVtZW50LnZhbHVlKSkge1xuICAgICAgdGhpcy5tb3ZlRm9yd2FyZChpZCk7XG4gICAgfVxuICAgIHRoaXMub3RwT3V0LmVtaXQoT2JqZWN0LnZhbHVlcyh0aGlzLm90cEZvcm0udmFsdWUpLmpvaW4oJycpKTtcbiAgfVxuXG4gIG1vdmVGb3J3YXJkKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXh0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMubmdPdHBTZXJ2aWNlLmdldEVsZW1lbnQoaWQgKyAxKTtcbiAgICBuZXh0RWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbW92ZUJhY2t3YXJkKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXh0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMubmdPdHBTZXJ2aWNlLmdldEVsZW1lbnQoaWQgLSAxKTtcbiAgICBuZXh0RWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgb25Gb2N1cyhpZCkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5uZ090cFNlcnZpY2UuZ2V0RWxlbWVudChpZCk7XG4gICAgY3VycmVudEVsZW1lbnQuc2VsZWN0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==