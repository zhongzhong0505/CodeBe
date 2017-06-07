import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxgraphDemoComponent } from './mxgraph-demo.component';

describe('MxgraphDemoComponent', () => {
  let component: MxgraphDemoComponent;
  let fixture: ComponentFixture<MxgraphDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxgraphDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxgraphDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
