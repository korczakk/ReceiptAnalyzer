import { TestBed } from '@angular/core/testing';

import { ProductCategorizationService } from './product-categorization.service';

describe('ProductCategorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCategorizationService = TestBed.get(ProductCategorizationService);
    expect(service).toBeTruthy();
  });
});
