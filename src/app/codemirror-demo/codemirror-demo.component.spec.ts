import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodemirrorDemoComponent } from './codemirror-demo.component';

describe('CodemirrorDemoComponent', () => {
  let component: CodemirrorDemoComponent;
  let fixture: ComponentFixture<CodemirrorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodemirrorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodemirrorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
