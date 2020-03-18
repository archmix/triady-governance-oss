import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { ModuleHome, Module } from 'module/module.model'

@Injectable()
export class ModuleService {

    endpoint = `${environment.apiEndpoint}/modules`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<ModuleHome> {
        return this.http.get<ModuleHome>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    get(id : string | number) : Observable<Module> {
        return this.http.get<Module>(`${this.endpoint}/${id}`)
        .pipe( retry(1), catchError(handleError))
    }
}