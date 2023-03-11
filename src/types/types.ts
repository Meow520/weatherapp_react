export interface WeatherResult {
  base: string;
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}
