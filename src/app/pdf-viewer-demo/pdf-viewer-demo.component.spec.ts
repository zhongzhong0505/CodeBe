import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerDemoComponent } from './pdf-viewer-demo.component';

describe('PdfViewerDemoComponent', () => {
  let component: PdfViewerDemoComponent;
  let fixture: ComponentFixture<PdfViewerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
