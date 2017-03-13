import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmchartsDemoComponent } from './amcharts-demo.component';

describe('AmchartsDemoComponent', () => {
  let component: AmchartsDemoComponent;
  let fixture: ComponentFixture<AmchartsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmchartsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmchartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
