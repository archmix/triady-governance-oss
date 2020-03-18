import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { TableHome, Table } from 'table/table.model'

@Injectable()
export class TableService {

    endpoint = `${environment.apiEndpoint}/tables`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<TableHome> {
        return this.http.get<TableHome>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    get(id : string | number) : Observable<Table> {
        return this.http.get<Table>(`${this.endpoint}/${id}`)
        .pipe( retry(1), catchError(handleError))
    }
}