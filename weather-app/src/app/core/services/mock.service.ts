import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Realtime } from '../../interfaces/realtime';
import { Forecast } from '../../interfaces/forecast';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor() {
    console.log('MockService constructor called');
  }


  getRealtimeData(): Observable<Realtime> {
    const mockRealtimeData: Realtime = {
      data: {
        time: '2024-02-18T13:33:00Z',
        values: {
          weatherCode: 1001,
          temperature: 25,
          temperatureApparent: 26,
          precipitationProbability: 20,
          uvIndex: 3,
          uvHealthConcern: 1,
          windSpeed: 2.5,
          windDirection: 66.63,
          visibility: 10.29,
          humidity: 70,
          cloudCover: 94,
          rainIntensity: 0,
          freezingRainIntensity: 0,
          snowIntensity: 0,
          sleetIntensity: 0,
        },
      },
      location: {
        lat: 38.7077522277832,
        lon: -9.136591911315918,
        name: 'Lisboa, Portugal',
      },
    };

    return of(mockRealtimeData);
  }

  getForecastData(): Observable<Forecast> {
    const mockForecastData: Forecast = {
      timelines: {
        daily: [
          {
            time: '2024-02-18T11:00:00Z',
            values: {
              temperatureMax: 2.56,
              temperatureMin: -6,
              weatherCodeMax: 1000,
              weatherCodeMin: 1000,
              rainAccumulationSum: 0,
              sleetAccumulationLweSum: 0,
              snowAccumulationSum: 0,
              sunriseTime: '2024-02-18T07:23:00Z',
              sunsetTime: '2024-02-18T18:17:00Z',
            },
          },
        ],
      },
      location: {
        lat: 40.7128,
        lon: -74.006,
      },
    };

    return of(mockForecastData);
  }
}
