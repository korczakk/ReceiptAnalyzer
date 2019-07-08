import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptImportMainComponent } from './receipt-import-main.component';

describe('ReceiptImportComponent', () => {
  let component: ReceiptImportMainComponent;
  let fixture: ComponentFixture<ReceiptImportMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptImportMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptImportMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
