import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancerlogementComponent } from './financerlogement.component';

describe('FinancerlogementComponent', () => {
  let component: FinancerlogementComponent;
  let fixture: ComponentFixture<FinancerlogementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancerlogementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancerlogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
