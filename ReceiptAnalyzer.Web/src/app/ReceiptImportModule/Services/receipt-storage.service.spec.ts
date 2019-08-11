import { TestBed } from '@angular/core/testing';

import { ReceiptStorageService } from './receipt-storage.service';

describe('ReceiptStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiptStorageService = TestBed.get(ReceiptStorageService);
    expect(service).toBeTruthy();
  });
});
