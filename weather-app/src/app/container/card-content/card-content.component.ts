import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ForecastService } from '../../core/services/forecast.service';
import { TodaysForecast } from '../../interfaces/todays-forecast';
import {
  ForecastHighlights,
  ForecastHighlightsRealTime,
} from '../../interfaces/forecast-highlights';
import { WeeklyForecast } from '../../interfaces/weekly-forecast';

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
    ForecastHighlightsComponent,
    WeeklyForecastComponent,
    ErrorMessageComponent,
  ],
  providers: [],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss',
})
export class CardContentComponent implements OnInit {
  public todaysForecastData$!: Observable<TodaysForecast>;
  public highlightsRealTimeData$!: Observable<ForecastHighlightsRealTime>;
  public highlightsData$!: Observable<ForecastHighlights>;
  public weeklyForecastData$!: Observable<WeeklyForecast>;
  public errorMessage!: string;
  constructor(private service: ForecastService) {}

  ngOnInit(): void {
    this.todaysForecastData$ = this.service.getTodaysForecastData().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );

    this.highlightsRealTimeData$ = this.service
      .getHighlightsRealTimeData()
      .pipe(
        catchError((error: string) => {
          this.errorMessage = error;
          return EMPTY;
        })
      );

    this.highlightsData$ = this.service.getHighlightsData().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );

    this.weeklyForecastData$ = this.service.getWeeklyForecastData().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
