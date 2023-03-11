import React, { FC } from "react";
type Props = {
  label: string;
  value: number|string;
  unit?: string;
};

export const TodayResultComponent: FC<Props> = (props) => {
  const { label, value, unit } = props;
  return (
    <div className="rounded-lg shadow-xl w-96 h-48 px-8 py-6 bg-box border border-gray-100 my-6">
      <div className="text-2xl">{label}</div>
      <div className="text-right h-24 flex justify-end items-end text-xl">
        <span className="text-5xl mr-3">{value}</span>{unit}
      </div>
    </div>
  );
};
