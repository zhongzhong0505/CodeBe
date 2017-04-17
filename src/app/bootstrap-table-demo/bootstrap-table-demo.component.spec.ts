import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTableDemoComponent } from './bootstrap-table-demo.component';

describe('BootstrapTableDemoComponent', () => {
  let component: BootstrapTableDemoComponent;
  let fixture: ComponentFixture<BootstrapTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
