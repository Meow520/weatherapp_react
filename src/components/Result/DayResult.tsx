import React, { FC } from "react";
import { WeatherResult } from "../../types/types";

type Props = {
  idx: number;
  result: WeatherResult;
  temp_max: number;
  temp_min: number;
};

export const DayResult: FC<Props> = (props) => {
  const { idx, result, temp_max, temp_min } = props;
  const { dt_txt } = result;
  const time = dt_txt.split(" ");
  const date = time[0].split("-");
  const month = date[1];
  const day = date[2];
  const { icon } = result.weather[0];
  const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div
      key={idx}
      className="w-32 rounded-lg shadow-xl mx-3 my-5 border-gray-100 border bg-box"
    >
      <div className="text-center pt-3">
        {month} / {day}
      </div>
      <img src={icon_url} alt="weather" className="mx-auto" />
      <div className="text-center pb-2">
        {Math.round(temp_max)}℃ / {Math.round(temp_min)}℃
      </div>
    </div>
  );
};
