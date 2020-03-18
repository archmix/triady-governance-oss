import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { SchemaHome, Schema } from 'schema/schema.model'

@Injectable()
export class SchemaService {

    endpoint = `${environment.apiEndpoint}/schemas`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<SchemaHome> {
        return this.http.get<SchemaHome>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    get(id : string | number) : Observable<Schema> {
        return this.http.get<Schema>(`${this.endpoint}/${id}`)
        .pipe( retry(1), catchError(handleError))
    }
}