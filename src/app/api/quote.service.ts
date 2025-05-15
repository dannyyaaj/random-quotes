import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Quote } from './quote.model';
import { QuotesResponse } from './quotes-response.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private readonly apiUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    return this.http.get<QuotesResponse>(this.apiUrl).pipe(
      map(response => response.quotes)
    );
  }
}
