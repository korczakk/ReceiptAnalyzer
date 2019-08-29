import { Injectable } from '@angular/core';
import { ReceiptItem } from '../interfaces/receipt-item';
import { ProductCategoriesMatch } from '../interfaces/ProductCategoriesMatch';

@Injectable()
export class ProductCategorizationService {

  private productCategoriesMatch: ProductCategoriesMatch[];
  constructor() { }

  matchCategoryToProduct(items: ReceiptItem[], availableCategories: ProductCategoriesMatch[]) {
    this.productCategoriesMatch = availableCategories;

    //Maps of words in each product name in Product-Categories array
    this.prepareListOfWords();

    let updatedItems = items.map<ReceiptItem>(item => {

      let matchingRatio = this.matchProductName(item.productName);

      //próbuj znaleźć produkt o jak najwyższej liczbie pasujących słów i dla takiego dopasowanie weź pierwszą kategorię

      return item;
    });

  }

  /**It finds the best matching product in Product-Categories array based on product name. It returns a number which describes
   * how much the product name matches to the product from Product-Categories array.
   * 
   * @param productName Name of the product to be found in Product - Categories array 
   */
  private matchProductName(productName: string): number {
    let wordsInTestedProductName: Map<String, string> = this.convertToMapOfWords(productName);



    return 0;
  }

  private prepareListOfWords() {
    this.productCategoriesMatch.forEach(val => {
      val['wordsMap'] = this.convertToMapOfWords(val.productName);
    });
  }

  private convertToMapOfWords(text: string): Map<string, string> {
    let wordsMap: Map<string, string> = new Map<string, string>();

    text.split(/\s+/g).forEach(word => {
      wordsMap.set(word.toLowerCase(), word);
    });

    return wordsMap;
  }
}
