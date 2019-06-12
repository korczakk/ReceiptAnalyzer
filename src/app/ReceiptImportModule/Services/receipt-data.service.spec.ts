import { TestBed } from '@angular/core/testing';

import { ReceiptDataService } from './receipt-data.service';

describe('ReceiptDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiptDataService = TestBed.get(ReceiptDataService);
    expect(service).toBeTruthy();
  });
});
