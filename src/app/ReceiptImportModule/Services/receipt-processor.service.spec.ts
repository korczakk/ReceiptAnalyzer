import { TestBed } from '@angular/core/testing';

import { ReceiptProcessorService } from './receipt-processor.service';

describe('ReceiptProcessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("getShoppingDate gets date from YYYY-MM-DD hh-nn", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getShoppingDate("2019-01-01 16:42");

    expect(result).toEqual("2019-01-01");
  });

  it("getShoppingDate gets date from DD-MM-YYYY", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getShoppingDate("01-02-2019");

    expect(result).toEqual("2019-02-01");
  });

  it("getShoppingDate gets date from DD.MM.YYYY", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getShoppingDate("01.02.2019");
console.log(result);
    expect(result).toEqual("2019-02-01");
  });

  it("getShoppingDate gets date from YYYY.MM.DD", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getShoppingDate("2019.02.01");
console.log(result);
    expect(result).toEqual("2019-02-01");
  });

  it("getTotalAmount converts 'SUMA PLN 10.01' to correct value", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getTotalAmount("SUMA PLN 10.01");

    expect(result).toEqual("10.01");
  });

  it("getTotalAmount converts '10, 01' to correct value", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getTotalAmount("10, 01");

    expect(result).toEqual("10.01");
  });

  it("getTotalAmount converts ' 10 . 01 ' to correct value", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getTotalAmount(" 10 . 01 ");

    expect(result).toEqual("10.01");
  });

  it("getQuantity retrives correct value from   1, 00x 12, 50 ", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getQuantity(" 1, 00x 12, 50 ");

    expect(result).toEqual("1.00");
  });

  it("getQuantity retrives correct value from  10,00 *12,50", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getQuantity("10,00 *12,50");

    expect(result).toEqual("10.00");
  });

  it("getProductPrice retrives correct value from 10,00 x 12,50", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getProductPrice("10,00 x 12,50");

    expect(result).toEqual("12.50");
  });

  it("getProductPrice retrives correct value from 10,00* 12,50", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getProductPrice("10,00* 12,50");

    expect(result).toEqual("12.50");
  });

  it("getProductName return correct value when text is 'Name  1,00 x 12.50 D'", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getProductName("Name  1,00 x 12.50 D");

    expect(result).toEqual("Name");

  });

  it("getProductName return correct value when text is '1,00 x 12.50 D'", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getProductName("1,00 x 12.50 D");

    expect(result).toEqual("");

  });

  it("getProductName return correct value when text is 'Name of a product '", () => {
    let service: ReceiptProcessorService = new ReceiptProcessorService();

    let result = service.getProductName("Name of a product ");

    expect(result).toEqual("Name of a product");

  });

});
