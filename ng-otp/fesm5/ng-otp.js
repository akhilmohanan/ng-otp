import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { Injectable, Component, Input, Output, EventEmitter, NgModule, defineInjectable } from '@angular/core';
import { FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgOtpService = /** @class */ (function () {
    function NgOtpService() {
    }
    /**
     * @param {?} string
     * @return {?}
     */
    NgOtpService.prototype.isEmptySting = /**
     * @param {?} string
     * @return {?}
     */
    function (string) {
        return string === '';
    };
    /**
     * @param {?} index
     * @param {?} limit
     * @return {?}
     */
    NgOtpService.prototype.isLastInput = /**
     * @param {?} index
     * @param {?} limit
     * @return {?}
     */
    function (index, limit) {
        return index === limit;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgOtpService.prototype.getElement = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return document.querySelector("#otp-" + index);
    };
    NgOtpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgOtpService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgOtpService.ngInjectableDef = defineInjectable({ factory: function NgOtpService_Factory() { return new NgOtpService(); }, token: NgOtpService, providedIn: "root" });
    return NgOtpService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgOtpModule = /** @class */ (function () {
    function NgOtpModule() {
    }
    NgOtpModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgOtpComponent],
                    imports: [
                        BrowserModule,
                        ReactiveFormsModule
                    ],
                    exports: [NgOtpComponent]
                },] }
    ];
    return NgOtpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgOtpService, NgOtpComponent, NgOtpModule };

//# sourceMappingURL=ng-otp.js.map