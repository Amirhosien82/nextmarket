import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface PriceFilterProps {
  price: [number, number];
  setPrice: (value: [number, number]) => void;
  onChange: (min: number, max: number) => void;
}

function PriceFilter({ price, setPrice, onChange }: PriceFilterProps) {
  function handleChange(values: number | number[]) {
    if (Array.isArray(values)) {
      const [newMin, newMax] = values;
      setPrice([newMin, newMax]);
      onChange(newMin, newMax);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Slider
        range
        min={0}
        max={3000000}
        value={price}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: "#10b77f", height: "6px" }]}
        handleStyle={[
          {
            borderColor: "#34d399",
            backgroundColor: "#10b77f",
            width: "20px",
            height: "20px",
            marginTop: "-7px",
          },
          {
            borderColor: "#34d399",
            backgroundColor: "#10b77f",
            width: "20px",
            height: "20px",
            marginTop: "-7px",
          },
        ]}
      />
      <div className="w-full flex justify-between items-center">
        <h3 className="text-lg text-color-success-100 dark:text-color-success-200">
          {price[1].toLocaleString()}تومان
        </h3>
        <h3 className="text-lg text-color-success-100 dark:text-color-success-200">
          {price[0].toLocaleString()}تومان
        </h3>
      </div>
    </div>
  );
}

export default PriceFilter;
