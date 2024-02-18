export interface Forecast {
  timelines: {
    daily: [
      {
        time: string;
        values: {
          temperatureMax: number;
          temperatureMin: number;
          weatherCodeMax: number;
          weatherCodeMin: number;
          rainAccumulationSum: number;
          sleetAccumulationLweSum: number;
          snowAccumulationSum: number;
          sunriseTime: string;
          sunsetTime: string;
        };
      }
    ];
  };
  location: {
    lat: number;
    lon: number;
  };
}
