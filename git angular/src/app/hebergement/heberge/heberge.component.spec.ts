import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergeComponent } from './heberge.component';

describe('HebergeComponent', () => {
  let component: HebergeComponent;
  let fixture: ComponentFixture<HebergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HebergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
