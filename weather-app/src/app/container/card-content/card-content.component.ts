import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ForecastService } from '../../core/services/forecast.service';
import { TodaysForecast } from '../../interfaces/todays-forecast';

import { TodaysForecastComponent } from '../../components/todays-forecast/todays-forecast.component';
import { ForecastHighlightsComponent } from '../../components/forecast-highlights/forecast-highlights.component';
import { WeeklyForecastComponent } from '../../components/weekly-forecast/weekly-forecast.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'card-content',
  standalone: true,
  imports: [
    AsyncPipe,
    TodaysForecastComponent,
    WeeklyForecastComponent,
    ForecastHighlightsComponent,
    ErrorMessageComponent,
  ],
  providers: [],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss',
})
export class CardContentComponent implements OnInit {
  public forecastData$!: Observable<TodaysForecast>;
  public errorMessage!: string;
  constructor(private service: ForecastService) {}

  ngOnInit(): void {
    this.forecastData$ = this.service.getForecastData().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
