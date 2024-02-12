export interface TodaysForecast {
  data: {
    time: string;
    values: {
      weatherCode: number;
      temperature: number;
      temperatureApparent: number;
      precipitationProbability: number;
    };
  };
  location: {
    lat: number;
    lon: number;
    name: string;
  };
}
