import { TestBed } from '@angular/core/testing';

import { ReceiptProcessorService } from './receipt-processor.service';

describe('ReceiptProcessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiptProcessorService = TestBed.get(ReceiptProcessorService);
    expect(service).toBeTruthy();
  });

  it("convertToDateString works", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.convertToDateString("2019-01-01 16:42");

    expect(result).toEqual("2019-01-01");
  });
});
