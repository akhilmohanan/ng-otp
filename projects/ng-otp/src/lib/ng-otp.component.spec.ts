import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOtpComponent } from './ng-otp.component';

describe('NgOtpComponent', () => {
  let component: NgOtpComponent;
  let fixture: ComponentFixture<NgOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
