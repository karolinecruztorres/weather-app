import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Realtime } from '../../interfaces/realtime';
import { Forecast } from '../../interfaces/forecast';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private http: HttpClient) {}

  getRealtimeData(): Observable<Realtime> {
    return this.http.get<Realtime>(
      `${environment.apiUrl}/weather/realtime?location=${environment.location}&units=${environment.units}&apikey=${environment.apiKey}`
    );
  }

  getForecastData(): Observable<Forecast> {
    return this.http.get<Forecast>(
      `${environment.apiUrl}/weather/forecast?location=${environment.location}&units=${environment.units}&timesteps=${environment.timesteps}&apikey=${environment.apiKey}`
    );
  }
}
