import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { TodaysForecast } from '../../interfaces/todays-forecast';
import { WeeklyForecast } from '../../interfaces/weekly-forecast';
import {
  ForecastHighlights,
  ForecastHighlightsRealTime,
} from '../../interfaces/forecast-highlights';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private http: HttpClient) {}

  getTodaysForecastData(): Observable<TodaysForecast> {
    return this.http.get<TodaysForecast>(
      `${environment.apiUrl}/weather/realtime?location=${environment.location}&units=${environment.units}&apikey=${environment.apiKey}`
    );
  }

  getHighlightsRealTimeData(): Observable<ForecastHighlightsRealTime> {
    return this.http.get<ForecastHighlightsRealTime>(
      `${environment.apiUrl}/weather/realtime?location=${environment.location}&units=${environment.units}&apikey=${environment.apiKey}`
    );
  }

  getHighlightsData(): Observable<ForecastHighlights> {
    return this.http.get<ForecastHighlights>(
      `${environment.apiUrl}/weather/forecast?location=${environment.location}&units=${environment.units}&timesteps=${environment.timesteps}&apikey=${environment.apiKey}`
    );
  }

  getWeeklyForecastData(): Observable<WeeklyForecast> {
    return this.http.get<WeeklyForecast>(
      `${environment.apiUrl}/weather/forecast?location=${environment.location}&units=${environment.units}&timesteps=${environment.timesteps}&apikey=${environment.apiKey}`
    );
  }
}
