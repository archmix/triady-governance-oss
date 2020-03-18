import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { CacheHome, Cache } from 'cache/cache.model'

@Injectable()
export class CacheService {

    endpoint = `${environment.apiEndpoint}/caches`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<CacheHome> {
        return this.http.get<CacheHome>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    get(id : string | number) : Observable<Cache> {
        return this.http.get<Cache>(`${this.endpoint}/${id}`)
        .pipe( retry(1), catchError(handleError))
    }
}