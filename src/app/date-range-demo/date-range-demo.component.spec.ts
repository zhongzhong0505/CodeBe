import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeDemoComponent } from './date-range-demo.component';

describe('DateRangeDemoComponent', () => {
  let component: DateRangeDemoComponent;
  let fixture: ComponentFixture<DateRangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
