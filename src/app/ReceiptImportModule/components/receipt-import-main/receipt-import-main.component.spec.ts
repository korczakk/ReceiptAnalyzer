import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptImportComponent } from './receipt-import-main.component';

describe('ReceiptImportComponent', () => {
  let component: ReceiptImportComponent;
  let fixture: ComponentFixture<ReceiptImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
