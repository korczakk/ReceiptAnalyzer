import { TestBed } from '@angular/core/testing';

import { ProductCategorizationService } from './product-categorization.service';

describe('ProductCategorizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('convertToMapOfWords', () => {
    const service: ProductCategorizationService = new ProductCategorizationService();

    //let words = service.convertToMapOfWords("Woda nestle Woda");

    expect(words.size).toEqual(3);
  });
});
