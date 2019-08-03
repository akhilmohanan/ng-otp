(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng-otp', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/forms', '@angular/platform-browser'], factory) :
    (factory((global['ng-otp'] = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.forms,global.ng.platformBrowser));
}(this, (function (exports,rxjs,operators,i0,forms,platformBrowser) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgOtpService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgOtpService.ngInjectableDef = i0.defineInjectable({ factory: function NgOtpService_Factory() { return new NgOtpService(); }, token: NgOtpService, providedIn: "root" });
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
            this.otpOut = new i0.EventEmitter();
            this.limitArray = [];
            this.changeFocus$ = new rxjs.Subject();
            this.subscription = new rxjs.Subscription();
            this.setFormBuilder();
            this.subscription.add(this.changeFocus$
                .pipe(operators.throttleTime(100)).subscribe(( /**
         * @param {?} index
         * @return {?}
         */function (index) { _this.changeFocus(index); })));
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
                this.limitArray.map(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    _this.otpForm.addControl("otp-" + element, new forms.FormControl('', forms.Validators.required));
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
            { type: i0.Component, args: [{
                        selector: 'ng-otp',
                        template: "<div [formGroup]=\"otpForm\">\n  <input type=\"tel\" class=\"example-input\" maxlength=\"1\" id=\"otp-{{i}}\"\n          *ngFor=\"let control of limitArray; let i = index\"\n          (keyup)=\"changeFocus$.next(i)\" (focusin)=\"onFocus(i)\"\n          formControlName=\"otp-{{i}}\">\n</div>",
                        styles: [".example-input::-moz-selection{background:#fff}.example-input::selection{background:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        NgOtpComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: NgOtpService }
            ];
        };
        NgOtpComponent.propDecorators = {
            limit: [{ type: i0.Input }],
            otpOut: [{ type: i0.Output }]
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
            { type: i0.NgModule, args: [{
                        declarations: [NgOtpComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            forms.ReactiveFormsModule
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

    exports.NgOtpService = NgOtpService;
    exports.NgOtpComponent = NgOtpComponent;
    exports.NgOtpModule = NgOtpModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-otp.umd.js.map