import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuoteService } from '../api/quote.service';
import { Quote } from '../api/quote';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy, OnInit {
  quotes: Quote[] = []
  subscription: Subscription = new Subscription()

  constructor(private readonly quoteService: QuoteService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.getQuotes()
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getQuotes(): void {
    this.quoteService.getQuotes()
      .subscribe(quotes => this.quotes = quotes)
  }

  getRandomQuote(quotesData: Quote[]): Quote {
    const randomIndex = Math.floor(Math.random() * quotesData.length)
    return quotesData[randomIndex];
  }
}
