import { Component } from '@angular/core';
import { TodaysForecastComponent } from '../todays-forecast/todays-forecast.component';
import { WeeklyForecastComponent } from '../weekly-forecast/weekly-forecast.component';
import { ForecastHighlightsComponent } from '../forecast-highlights/forecast-highlights.component';

@Component({
  selector: 'card-content',
  standalone: true,
  imports: [TodaysForecastComponent, WeeklyForecastComponent, ForecastHighlightsComponent],
  providers: [],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {

}
