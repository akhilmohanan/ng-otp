/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgOtpService {
    constructor() { }
    /**
     * @param {?} string
     * @return {?}
     */
    isEmptySting(string) {
        return string === '';
    }
    /**
     * @param {?} index
     * @param {?} limit
     * @return {?}
     */
    isLastInput(index, limit) {
        return index === limit;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getElement(index) {
        return document.querySelector(`#otp-${index}`);
    }
}
NgOtpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgOtpService.ctorParameters = () => [];
/** @nocollapse */ NgOtpService.ngInjectableDef = i0.defineInjectable({ factory: function NgOtpService_Factory() { return new NgOtpService(); }, token: NgOtpService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3RwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1vdHAvIiwic291cmNlcyI6WyJsaWIvbmctb3RwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxZQUFZO0lBRXZCLGdCQUFnQixDQUFDOzs7OztJQUVqQixZQUFZLENBQUMsTUFBYztRQUN6QixPQUFPLE1BQU0sS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3RCLE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFtQixRQUFRLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdPdHBTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGlzRW1wdHlTdGluZyhzdHJpbmc6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcgPT09ICcnO1xuICB9XG5cbiAgaXNMYXN0SW5wdXQoaW5kZXgsIGxpbWl0KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSBsaW1pdDtcbiAgfVxuXG4gIGdldEVsZW1lbnQoaW5kZXgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgI290cC0ke2luZGV4fWApO1xuICB9XG59XG4iXX0=