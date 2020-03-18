import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { handleError } from 'common/handleError';
import { TopicHome, Topic } from 'topic/topic.model'

@Injectable()
export class TopicService {

    endpoint = `${environment.apiEndpoint}/topics`
    
    constructor(private http: HttpClient) { }

    getHome() : Observable<TopicHome> {
        return this.http.get<TopicHome>(`${this.endpoint}/home`)
        .pipe( retry(1), catchError(handleError))
    }

    get(id : string | number) : Observable<Topic> {
        return this.http.get<Topic>(`${this.endpoint}/${id}`)
        .pipe( retry(1), catchError(handleError))
    }
}