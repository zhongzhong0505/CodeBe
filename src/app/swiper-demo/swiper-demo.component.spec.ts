import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDemoComponent } from './swiper-demo.component';

describe('SwiperDemoComponent', () => {
  let component: SwiperDemoComponent;
  let fixture: ComponentFixture<SwiperDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
