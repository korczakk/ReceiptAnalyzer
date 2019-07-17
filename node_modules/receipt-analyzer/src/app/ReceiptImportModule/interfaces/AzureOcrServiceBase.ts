import { Observable } from 'rxjs';

export abstract class AzureOcrServiceBase {

    abstract processImageWithOcr(image: File): Observable<any> 

}