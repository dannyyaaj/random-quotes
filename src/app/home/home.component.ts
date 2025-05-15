import { Component, OnInit, inject } from '@angular/core';
import { QuoteService } from '../api/quote.service';
import { Quote } from '../api/quote.model';
import { QuoteContainerComponent } from '../quote-container/quote-container.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuoteContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  quotes: Quote[] = []
  currentQuote?: Quote
  quoteService = inject(QuoteService);

  ngOnInit(): void {
    this.getQuotes()
  }

  getQuotes(): void {
    this.quoteService.getQuotes().pipe(take(1)).subscribe((quotes) => {
      this.quotes = quotes;
      this.currentQuote = this.getRandomQuote(quotes);
    });
  }

  getRandomQuote(quotes: Quote[]): Quote {
    if (!quotes.length) return {} as Quote;

    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex];
  }

  getNewQuote(): void {
    if (this.quotes.length) {
      this.currentQuote = this.getRandomQuote(this.quotes);
    }
  }
}
