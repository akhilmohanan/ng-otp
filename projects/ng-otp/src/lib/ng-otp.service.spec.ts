import { TestBed } from '@angular/core/testing';

import { NgOtpService } from './ng-otp.service';

describe('NgOtpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgOtpService = TestBed.get(NgOtpService);
    expect(service).toBeTruthy();
  });
});
