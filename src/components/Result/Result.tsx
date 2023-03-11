import React, { FC, useState } from "react";
import { useWeekResult } from "../../hooks/useWeekResult";
import { useEffect } from "react";
import { WeatherResult } from "../../types/types";
import { TodayResult } from "./TodayResult";
import { DayResult } from "./DayResult";

export type Props = {
  isOpen: boolean;
  area: string;
};

export const Result: FC<Props> = (props) => {
  const { isOpen, area } = props;
  const [results, setResults] = useState<WeatherResult[] | null>(null);
  const [maxtemps, setMaxtemps] = useState<number[]>([]);
  const [mintemps, setMintemps] = useState<number[]>([]);
  const { getWeekResult } = useWeekResult();
  useEffect(() => {
    const getData = async () => {
      await getWeekResult(area)
        .then((res) => {
          let maxtemp_list = [];
          let mintemp_list = [];

          // calculate max temp and min temp
          for (let i = 0; i < 5; i++) {
            let maxtemp = 0;
            let mintemp = Infinity;
            for (let j = 0; j < 8; j++) {
              const data = res[i * 8 + j];
              if (maxtemp < data.main.temp_max) {
                maxtemp = data.main.temp_max;
              }
              if (mintemp > data.main.temp_min) {
                mintemp = data.main.temp_min;
              }
            }
            maxtemp_list.push(maxtemp);
            mintemp_list.push(mintemp);
            if (i === 4) {
              setMaxtemps(maxtemp_list);
              setMintemps(mintemp_list);
            }
          }
          const res_list = [res[0], res[8], res[16], res[24], res[32]];
          setResults(res_list);
        })
        .catch(() => {
          setResults(null);
        });
    };
    getData();
  }, [area]);

  return results !== null ? (
    <div hidden={!isOpen} className="xl:w-2/3 lg:w-full mx-auto">
      <TodayResult
        result={results[0]}
        temp_max={maxtemps[0]}
        temp_min={mintemps[0]}
        area={area}
      />
      <div className="flex justify-center">
        {results.map((result, idx) => (
          <div key={idx}>
            <DayResult
              idx={idx}
              result={result}
              temp_max={maxtemps[idx]}
              temp_min={mintemps[idx]}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-center text-xl">
      <div>no result</div>
      <div>Please try another city</div>
    </div>
  );
};
