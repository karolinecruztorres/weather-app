export interface WeeklyForecast {
  location: {
    lat: number;
    lon: number;
  };
  timelines: {
    hourly: Array<{
      time: string;
      values: {
        icon: number;
        temperature: number;
        //search for min and max temperature
      };
    }>;
  };
}
