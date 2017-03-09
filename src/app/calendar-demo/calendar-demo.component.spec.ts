import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDemoComponent } from './calendar-demo.component';

describe('CalendarDemoComponent', () => {
  let component: CalendarDemoComponent;
  let fixture: ComponentFixture<CalendarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
