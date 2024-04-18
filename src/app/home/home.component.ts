import { Component, OnInit, inject } from '@angular/core';
import { QuoteService } from '../api/quote.service';
import { Quote } from '../api/quote';
import { Subscription } from 'rxjs';
import { QuoteContainerComponent } from '../quote-container/quote-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuoteContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  quotes: Quote[] = []
  currentQuote: Quote
  subscription: Subscription = new Subscription()
  quoteService = inject(QuoteService);

  ngOnInit(): void {
    this.getQuotes()
  }

  getQuotes(): void {
    this.quoteService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes
        this.currentQuote = this.getRandomQuote(quotes)
      })
  }

  getRandomQuote(quotesData: Quote[]): Quote {
    const randomIndex = Math.floor(Math.random() * quotesData.length)
    return quotesData[randomIndex];
  }

  getNewQuote(): void {
    if (this.quotes.length && this.currentQuote) {
      if (this.getRandomQuote(this.quotes) !== this.currentQuote) {
        this.currentQuote = this.getRandomQuote(this.quotes)
      }
    }
  }
}
