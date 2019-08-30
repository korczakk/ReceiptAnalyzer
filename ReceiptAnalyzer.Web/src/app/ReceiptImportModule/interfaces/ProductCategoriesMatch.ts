export class ProductCategoriesMatch {
    productName: string,
    groupedCategories: {
        categoryName: string,
        numberOfCategories: number
    }[],
    wordsMap: Map<string, string>    

    public calculateMatchingRatio(mapToCompare: Map<string, string>): number {
        //iterate only through the longer array
        let mapToIterate: Map<string, string> = this.wordsMap.size > mapToCompare.size ? this.wordsMap : mapToCompare;

        let numberOfMatchingKeys: number = 0;

        mapToIterate.forEach(key => {
            if (mapToCompare.has(key))
                numberOfMatchingKeys++;
        });

        return numberOfMatchingKeys / mapToCompare.size;
    }
}