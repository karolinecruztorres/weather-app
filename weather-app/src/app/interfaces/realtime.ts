export interface Realtime {
  data: {
    time: string;
    values: {
      weatherCode: number;
      temperature: number;
      temperatureApparent: number;
      precipitationProbability: number;
      uvIndex: number;
      uvHealthConcern: number;
      windSpeed: number;
      windDirection: number;
      visibility: number;
      humidity: number;
      cloudCover: number;
      rainIntensity: number;
      freezingRainIntensity: number;
      snowIntensity: number;
      sleetIntensity: number;
    };
  };
  location: {
    lat: number;
    lon: number;
    name: string;
  };
}
