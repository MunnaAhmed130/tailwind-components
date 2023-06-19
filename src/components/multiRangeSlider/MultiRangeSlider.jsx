import { useCallback, useEffect, useRef, useState } from "react";
import "./MultiRangeSlider.css";

const MultiRangeSlider = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  //   console.log(range);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [max, min]
  );

  //set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    console.log(minPercent, maxPercent);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
      // console.log("percentage", maxPercent - minPercent, "%");
    }
  }, [maxVal, getPercent]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full bg-white py-8">
        <p className="text-black text-center font-bold">MultiRangeSlider</p>
        <div className="range-container w-full h-20 flex items-center justify-center ">
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), maxVal);
              setMinVal(value);
              minValRef.current = value;
            }}
            className="thumb thumb--left pointer-events-none cursor-pointer absolute h-0 w-[200px] outline-none focus:outline-slate-800 z-[3]"
            style={{ zIndex: minVal >= max - 100 && "5" }}
          />

          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(e) => {
              const value = Math.max(Number(e.target.value), minVal);
              // console.log(Number(e.target.value), minVal + 1);
              setMaxVal(value);
              maxValRef.current = value;
            }}
            className="thumb thumb--right pointer-events-none cursor-pointer absolute h-0 w-[200px] outline-none focus:outline-red-500 z-[4]"
          />

          <div className="slider relative w-[200px] ">
            <div className="slider__track absolute rounded h-1 z-[1] w-full bg-slate-300" />

            <div
              ref={range}
              className="slider__range absolute bg-blue-300 rounded h-1 z-[2]"
            />

            <div className="slider__left-value absolute left-0 text-black/75 font-bold text-xs mt-5">
              {minVal}
            </div>

            <div className="slider__right-value absolute right-0 text-black/75 font-bold text-xs mt-5">
              {maxVal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
