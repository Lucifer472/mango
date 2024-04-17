"use client";

import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const slider = [
  "/images/order/5.jpg",
  "/images/order/1.jpeg",
  "/images/order/2.jpeg",
  "/images/order/3.jpeg",
  "/images/order/4.jpeg",
];

export const OrderSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < slider.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full h-[240px] xx:h-[320px] xs:h-[380px] sm:h-[450px] relative">
      <div
        className="w-full h-[240px] xx:h-[320px] xs:h-[380px] sm:h-[450px] flex items-start transition-all duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slider.map((s) => (
          <div
            key={s}
            className="bg-center bg-no-repeat flex-shrink-0 basis-full bg-cover h-[240px] xx:h-[320px] xs:h-[380px] sm:h-[450px] w-full"
            style={{
              backgroundImage: `url('${s}')`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-4">
        <button
          className="p-2 bg-gray-700 bg-opacity-60"
          onClick={() =>
            setIndex((prev) => (prev !== 0 ? prev - 1 : slider.length - 1))
          }
        >
          <BsArrowLeft className="text-white font-bold text-lg" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 -right-5">
        <button
          className="p-2 bg-gray-700 bg-opacity-60"
          onClick={() =>
            setIndex((prev) => (prev < slider.length - 1 ? prev + 1 : 0))
          }
        >
          <BsArrowRight className="text-white font-bold text-lg" />
        </button>
      </div>
      <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex md:hidden items-center justify-center gap-x-4 w-full mt-6">
          {slider.map((_t, number) => (
            <button key={number} onClick={() => setIndex(number)}>
              <span
                className={`w-2 h-2 block rounded-full transition-all duration-500 ${
                  index === number ? "bg-secondary-color" : "bg-black"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
