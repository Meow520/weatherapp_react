import React, { FC, useState } from "react";

type Props = {
  area: string;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Search: FC<Props> = (props) => {
  const [text, setText] = useState("");
  const { area, setArea, setIsOpen } = props;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    setArea(text);
    setText("");
    e.currentTarget.value = "";
    setIsOpen(true);
  };
  return (
    <div className="flex justify-center my-10">
      <input
        type="text"
        name="search"
        id="search"
        className="bg-white w-1/2 text-2xl px-5 py-3 rounded-lg shadow-2xl border-gray-50 border"
        placeholder="city name"
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
