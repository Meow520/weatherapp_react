import React, { FC } from "react";
import { WeatherResult } from "../../types/types";

type Props = {
  area: string;
  result: WeatherResult;
  temp_max: number;
  temp_min: number;
};

export const TopResult: FC<Props> = (props) => {
  const { area, result, temp_max, temp_min } = props;
  const { temp } = result.main;
  const icon_url = `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`;
  return (
    <div className="flex justify-between">
      <div className="ml-10">
        <div className="text-5xl my-5">{area}</div>
        <div className="text-6xl my-5">{Math.round(temp)}℃</div>
        <div className="text-center text-xl">
          {Math.round(temp_max)}℃ / {Math.round(temp_min)}℃
        </div>
      </div>
      <div>
        <img src={icon_url} alt="weather" className="mx-auto" />
      </div>
    </div>
  );
};
