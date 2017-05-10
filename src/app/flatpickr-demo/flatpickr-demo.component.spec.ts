import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatpickrDemoComponent } from './flatpickr-demo.component';

describe('FlatpickrDemoComponent', () => {
  let component: FlatpickrDemoComponent;
  let fixture: ComponentFixture<FlatpickrDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatpickrDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatpickrDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
