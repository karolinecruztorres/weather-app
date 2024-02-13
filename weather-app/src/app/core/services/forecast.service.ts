import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodaysForecast } from '../../interfaces/todays-forecast';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private http: HttpClient) {}

  getForecastData(): Observable<TodaysForecast> {
    return this.http.get<TodaysForecast>(
      `${environment.apiUrl}/weather/realtime?location=${environment.timezone}&units=${environment.units}&apikey=${environment.apiKey}`
    );
  }
}
