import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ForecastService } from '../../core/services/forecast.service';
import { MockService } from '../../core/services/mock.service';
import { Realtime } from '../../interfaces/realtime';
import { Forecast } from '../../interfaces/forecast';
import { environment } from '../../../environments/environment.development';

import { TodaysForecastComponent } from '../../components/todays-forecast/todays-forecast.component';
import { ForecastHighlightsComponent } from '../../components/forecast-highlights/forecast-highlights.component';
import { WeeklyForecastComponent } from '../../components/weekly-forecast/weekly-forecast.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { RealtimeHighlightsComponent } from '../../components/realtime-highlights/realtime-highlights.component';

@Component({
  selector: 'card-content',
  standalone: true,
  imports: [
    AsyncPipe,
    TodaysForecastComponent,
    ForecastHighlightsComponent,
    RealtimeHighlightsComponent,
    WeeklyForecastComponent,
    ErrorMessageComponent,
  ],
  providers: [],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss',
})
export class CardContentComponent implements OnInit {
  public todaysForecast$!: Observable<Realtime>;
  public highlightsRealTime$!: Observable<Realtime>;
  public highlights$!: Observable<Forecast>;
  public weeklyForecast$!: Observable<Forecast>;
  public errorMessage!: string;

  constructor(
    private forecastService: ForecastService,
    private mockService: MockService
  ) {}

  ngOnInit(): void {
    this.todaysForecast$ = this.getService()
      .getRealtimeData()
      .pipe(
        catchError((error: string) => {
          this.errorMessage = error;
          return EMPTY;
        })
      );

    this.highlightsRealTime$ = this.getService()
      .getRealtimeData()
      .pipe(
        catchError((error: string) => {
          this.errorMessage = error;
          return EMPTY;
        })
      );

    this.highlights$ = this.getService()
      .getForecastData()
      .pipe(
        catchError((error: string) => {
          this.errorMessage = error;
          return EMPTY;
        })
      );

    this.weeklyForecast$ = this.getService()
      .getForecastData()
      .pipe(
        catchError((error: string) => {
          this.errorMessage = error;
          return EMPTY;
        })
      );
  }

  private getService(): ForecastService | MockService {
    return environment.apiOn ? this.forecastService : this.mockService;
  }
}
