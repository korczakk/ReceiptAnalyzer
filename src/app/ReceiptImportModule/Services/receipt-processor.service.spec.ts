import { TestBed } from '@angular/core/testing';

import { ReceiptProcessorService } from './receipt-processor.service';

describe('ReceiptProcessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiptProcessorService = TestBed.get(ReceiptProcessorService);
    expect(service).toBeTruthy();
  });
});
