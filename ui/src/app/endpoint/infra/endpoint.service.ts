import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { EndpointHome, Endpoint } from 'endpoint/endpoint.model'

@Injectable()
export class EndpointService {

    endpoint = `${environment.apiEndpoint}/endpoints`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<EndpointHome> {
        return this.http.get<EndpointHome>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    get(id : string | number) : Observable<Endpoint> {
        return this.http.get<Endpoint>(`${this.endpoint}/${id}`)
        .pipe( retry(1), catchError(handleError))
    }
}