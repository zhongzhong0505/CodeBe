import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoswipeDemoComponent } from './photoswipe-demo.component';

describe('PhotoswipeDemoComponent', () => {
  let component: PhotoswipeDemoComponent;
  let fixture: ComponentFixture<PhotoswipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoswipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoswipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
