export interface ForecastHighlights {
  location: {
    lat: number;
    lon: number;
  };
  timelines: {
    daily: Array<{
      time: string;
      values: {
        uvIndex: number;
        uvHealthConcern: number;
        windSpeed: number;
        windDirection: number;
        humidity: number;
        visibility: number;
        rainIntensity: number;
        cloudCover: number;
      };
    }>;
  };
}
