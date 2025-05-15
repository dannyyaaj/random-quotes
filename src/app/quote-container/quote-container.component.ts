import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Quote } from '../api/quote.model';

@Component({
  selector: 'app-quote-container',
  standalone: true,
  imports: [],
  templateUrl: './quote-container.component.html',
  styleUrl: './quote-container.component.scss'
})
export class QuoteContainerComponent {
  @Input() currentQuote?: Quote;
  @Output() getNewQuote = new EventEmitter();

  onClick() {
    this.getNewQuote.emit()
  }

}
