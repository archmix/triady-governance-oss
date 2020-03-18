import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { Context, ContextHome } from 'context/context.model'

@Injectable()
export class ContextService {

    endpoint = `${environment.apiEndpoint}/contexts`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<ContextHome> {
        return this.http.get<ContextHome>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    get(id : string | number) : Observable<Context> {
        return this.http.get<Context>(`${this.endpoint}/${id}`)
        .pipe( retry(1), catchError(handleError))
    }
}