import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathjaxDemoComponent } from './mathjax-demo.component';

describe('MathjaxDemoComponent', () => {
  let component: MathjaxDemoComponent;
  let fixture: ComponentFixture<MathjaxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathjaxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathjaxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
