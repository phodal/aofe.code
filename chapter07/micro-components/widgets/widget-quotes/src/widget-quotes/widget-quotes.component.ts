import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'widget-quotes',
  template: `
  <div class="card">
    <div class="card-block">
      <div class="card-title">
        widget-quotes
      </div>
      <div class="card-text">
        {{quote}}
      </div>
    </div>
  </div>
  `
})
export class WidgetQuotesComponent implements OnInit {

  quote: string = 'loading ...';

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotesService.getQuotesOfTheDay().subscribe((quotes: Quotes) => this.quote = quotes.contents.quotes[0].quote);
  }

}
