import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodaysForecast } from '../interfaces/todays-forecast';
import { api } from '../api/api';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private http: HttpClient) {}

  getForecastData(): Observable<TodaysForecast> {
    return this.http.get<TodaysForecast>(
      `${api.apiUrl}/weather/realtime?location=${api.timezone}&units=${api.units}&apikey=${api.apiKey}`
    );
  }
}
