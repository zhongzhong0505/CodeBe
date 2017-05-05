import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinyinDemoComponent } from './pinyin-demo.component';

describe('PinyinDemoComponent', () => {
  let component: PinyinDemoComponent;
  let fixture: ComponentFixture<PinyinDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinyinDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinyinDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
