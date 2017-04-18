import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select2DemoComponent } from './select2-demo.component';

describe('Select2DemoComponent', () => {
  let component: Select2DemoComponent;
  let fixture: ComponentFixture<Select2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
