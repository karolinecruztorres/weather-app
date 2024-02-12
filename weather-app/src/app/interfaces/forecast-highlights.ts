export interface ForecastHighlightsRealTime {
  data: {
    time: string;
    values: {
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

export interface ForecastHighlights {
  timelines: {
    daily: [
      {
        time: string;
        values: {
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
    lat: 42.3478;
    lon: -71.0466;
  };
}
