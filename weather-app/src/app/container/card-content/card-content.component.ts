import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TodaysForecastComponent } from '../../components/todays-forecast/todays-forecast.component';
import { WeeklyForecastComponent } from '../../components/weekly-forecast/weekly-forecast.component';
import { ForecastHighlightsComponent } from '../../components/forecast-highlights/forecast-highlights.component';
import { ForecastService } from '../../services/forecast.service';
import { Observable } from 'rxjs';
import { TodaysForecast } from '../../interfaces/todays-forecast';

@Component({
  selector: 'card-content',
  standalone: true,
  imports: [
    AsyncPipe,
    TodaysForecastComponent,
    WeeklyForecastComponent,
    ForecastHighlightsComponent,
  ],
  providers: [],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss',
})
export class CardContentComponent implements OnInit {
  public forecastData$!: Observable<TodaysForecast>;
  constructor(private service: ForecastService) {}

  ngOnInit(): void {
    this.forecastData$ = this.service.getForecastData();
  }
}
