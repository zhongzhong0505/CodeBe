import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathjaxComponent } from './mathjax.component';

describe('MathjaxComponent', () => {
  let component: MathjaxComponent;
  let fixture: ComponentFixture<MathjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
