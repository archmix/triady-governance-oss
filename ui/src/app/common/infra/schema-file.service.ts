import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';

@Injectable()
export class SchemaFileService {

    constructor(private http: HttpClient) { }

    get(path : string) : Observable<string> {
        return this.http.get(`${path}`, { responseType : "text" })
        .pipe( retry(1), catchError(handleError))
    }     
}