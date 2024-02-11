export interface TodaysForecast {
  location: {
    lat: number;
    lon: number;
  };
  timelines: {
    minutely: Array<{
      time: string;
      values: {
        icon: number;
        temperature: number;
        feelsLike: number;
        rain: number;
        freezingRain: number;
        snow: number;
        sleet: number;
      };
    }>;
  };
}
