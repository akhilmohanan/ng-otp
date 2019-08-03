/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ NgOtpService.ngInjectableDef = i0.defineInjectable({ factory: function NgOtpService_Factory() { return new NgOtpService(); }, token: NgOtpService, providedIn: "root" });
    return NgOtpService;
}());
export { NgOtpService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3RwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1vdHAvIiwic291cmNlcyI6WyJsaWIvbmctb3RwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7O0FBRXZEO0lBS0U7SUFBZ0IsQ0FBQzs7Ozs7SUFFakIsbUNBQVk7Ozs7SUFBWixVQUFhLE1BQWM7UUFDekIsT0FBTyxNQUFNLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELGtDQUFXOzs7OztJQUFYLFVBQVksS0FBSyxFQUFFLEtBQUs7UUFDdEIsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsaUNBQVU7Ozs7SUFBVixVQUFXLEtBQUs7UUFDZCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQW1CLFVBQVEsS0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBakJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3VCQUpEO0NBb0JDLEFBbEJELElBa0JDO1NBZlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdPdHBTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGlzRW1wdHlTdGluZyhzdHJpbmc6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcgPT09ICcnO1xuICB9XG5cbiAgaXNMYXN0SW5wdXQoaW5kZXgsIGxpbWl0KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSBsaW1pdDtcbiAgfVxuXG4gIGdldEVsZW1lbnQoaW5kZXgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgI290cC0ke2luZGV4fWApO1xuICB9XG59XG4iXX0=