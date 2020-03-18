import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { ApiHome, Api } from 'api/api.model'

@Injectable()
export class ApiService {

    endpoint = `${environment.apiEndpoint}/apis`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<ApiHome> {
        return this.http.get<ApiHome>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    get(id : string | number) : Observable<Api> {
        return this.http.get<Api>(`${this.endpoint}/${id}`)
        .pipe( retry(1), catchError(handleError))
    }
}