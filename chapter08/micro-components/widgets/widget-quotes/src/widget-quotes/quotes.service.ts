import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuotesService {

  constructor(private http: HttpClient) { }

  private readonly url = 'https://quotes.rest/qod?category=inspire';

  getQuotesOfTheDay(): Observable<Quotes> {
    return this.http.get<Quotes>(this.url);
  }

}
