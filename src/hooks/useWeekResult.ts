import { instance } from "./axios";
import { WeatherResult } from "../types/types"; 

type instance = (area: string) => Promise<WeatherResult[]>;

export const useWeekResult = () => {
  const getWeekResult: instance = async (area: string) => {
    const API_KEY = `4f3a5bce406c348a09ed58946f694b11`;
    const res = await instance
      .get(`/forecast?appid=${API_KEY}&q=${area}&units=metric`)
      .then((res) => {
        const data = res.data;
        return data.list;
      })
      .catch((err) => {
        console.log("err:", err.message);
      });
    return res;
  };
  return { getWeekResult };
};
