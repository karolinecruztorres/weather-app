export interface Forecast {
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
          rainAccumulationSum: number;
          sleetAccumulationLweSum: number;
          snowAccumulationSum: number;
          moonriseTime: string;
          moonsetTime: string;
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
