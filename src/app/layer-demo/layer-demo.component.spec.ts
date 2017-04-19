import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerDemoComponent } from './layer-demo.component';

describe('LayerDemoComponent', () => {
  let component: LayerDemoComponent;
  let fixture: ComponentFixture<LayerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
