import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmapDemoComponent } from './amap-demo.component';

describe('AmapDemoComponent', () => {
  let component: AmapDemoComponent;
  let fixture: ComponentFixture<AmapDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmapDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
