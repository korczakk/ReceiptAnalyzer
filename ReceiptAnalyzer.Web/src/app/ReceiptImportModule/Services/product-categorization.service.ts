import { Injectable } from '@angular/core';
import { ReceiptItem } from '../interfaces/receipt-item';
import { ProductCategoriesMatch } from '../interfaces/ProductCategoriesMatch';

@Injectable()
export class ProductCategorizationService {

  private productCategoriesMatch: ProductCategoriesMatch[];
  constructor() { }

  matchCategoryToProduct(items: ReceiptItem[], availableCategories: ProductCategoriesMatch[]) {
    this.productCategoriesMatch = availableCategories;

    //Map of words in each product name in Product-Categories array
    this.prepareListOfWords();

    let updatedItems = items.map<ReceiptItem>(item => {

      let filteredProductCategories = this.filterProductCategories(item.productName);

      //próbuj znaleźć produkt o jak najwyższej liczbie pasujących słów i dla takiego dopasowanie weź pierwszą kategorię

      return item;
    });

  }

  /**It finds the best matching product in Product-Categories array based on product name. It returns a number which describes
   * how much the product name matches to the product from Product-Categories array.
   * 
   * @param productName Name of the product to be found in Product - Categories array 
   */
  private filterProductCategories(productName: string, matchTreshold: number = 0.6): ProductCategoriesMatch[] {
    let wordsInTestedProductName: Map<string, string> = this.convertToMapOfWords(productName);

    //calculate matching ratio for each ProductCategoryMatch
    let filteredProductCategoriesMatch = this.productCategoriesMatch.map(val => {
      let matchingRatio = val.calculateMatchingRatio(wordsInTestedProductName);
      
      if(matchingRatio >= matchTreshold) {
        let returnVal: ProductCategoriesMatch = val;
        returnVal['matchingRatio'] = matchingRatio;
  
        return returnVal;  
      }      
    });

    //Sort array
    filteredProductCategoriesMatch.sort((a, b) => {
      if(a['matchingRatio'] > b['matchingRatio'])
        return 1;
        
      if (a['matchingRatio'] < b['matchingRatio'])
        return -1;

      return 0;
    });    

    return filteredProductCategoriesMatch;
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
