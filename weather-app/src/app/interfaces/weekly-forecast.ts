export interface WeeklyForecast {
  timelines: {
    daily: [
      {
        time: string;
        values: {
          temperatureAvg: number;
          temperatureMax: number;
          temperatureMin: number;
          weatherCodeMax: number;
          weatherCodeMin: number;
        };
      }
    ];
  };
  location: {
    lat: number;
    lon: number;
  };
}
