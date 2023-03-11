import React, { FC } from "react";
import { WeatherResult } from "../../types/types";
import { TopResult } from "./TopResult";
import { TodayResultComponent } from "./TodayResultComponent";

type Props = {
  result: WeatherResult;
  temp_max: number;
  temp_min: number;
  area: string;
};

export const TodayResult: FC<Props> = (props) => {
  const { result, temp_max, temp_min, area } = props;
  const { description } = result.weather[0];
  const { humidity, pressure } = result.main;
  const { speed } = result.wind;
  return (
    <div className="w-2/3 mx-auto">
      <TopResult
        result={result}
        area={area}
        temp_max={temp_max}
        temp_min={temp_min}
      />
      <div className="grid grid-cols-2">
        <TodayResultComponent label="Description" value={description} />
        <TodayResultComponent label="Humidity" value={humidity} unit="%" />
        <TodayResultComponent label="Pressure" value={pressure} unit="hp" />
        <TodayResultComponent
          label="Wind Speed"
          value={Math.round(speed)}
          unit="m/s"
        />
      </div>
    </div>
  );
};
