import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemoComponent } from './grid-demo.component';

describe('GridDemoComponent', () => {
  let component: GridDemoComponent;
  let fixture: ComponentFixture<GridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
