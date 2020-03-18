import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { Dashboard } from 'dashboard/dashboard.model'

@Injectable()
export class DashboardService {

    endpoint = `${environment.apiEndpoint}/dashboards`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<Dashboard> {
        return this.http.get<Dashboard>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    
}