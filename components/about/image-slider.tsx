"use client";

import { useEffect, useState } from "react";

const slider = ["/images/about/1.png", "/images/about/2.png"];
const ImageSlider = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev < slider.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="w-full flex items-start transition-all duration-500"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {slider.map((s) => (
          <div
            className="bg-center bg-contain bg-no-repeat flex-shrink-0 basis-full w-full min-h-[140px] xx:min-h-[180px]  xs:min-h-[240px] sm:min-h-[300px] md:min-h-[350px]"
            style={{
              backgroundImage: `url('${s}')`,
            }}
            key={s}
          ></div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-4 w-full mt-2">
        {slider.map((_t, index) => (
          <button key={index} onClick={() => setI(index)}>
            <span
              className={`w-4 h-4 block rounded-full transition-all duration-500 ${
                i === index ? "bg-secondary-color" : "bg-black"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
