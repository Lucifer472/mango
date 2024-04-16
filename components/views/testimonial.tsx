"use client";
import { testimonials } from "@/constant";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden mt-6">
      <div
        className="w-full h-full flex transition-all duration-700 md:hidden"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t, index) => (
          <div className="w-full flex-shrink-0 basis-full px-4" key={index}>
            <div className="flex flex-col w-full items-start min-w-[320px]">
              <div className="flex items-center justify-start gap-x-4">
                <Image
                  src={t.img}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="object-contain rounded-full"
                />
                <div className="flex flex-col items-start">
                  <span className="text-main-color font-medium text-xl italic">
                    {t.name}
                  </span>
                  <span className="italic">{t.location}</span>
                </div>
              </div>
              <div className="bg-white min-h-[280px] px-4 py-6 text-main-color italic rounded-md mt-6 relative test-before">
                <p className="text-justify text-lg">{t.testimonial}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:hidden items-center justify-center gap-x-4 w-full mt-6">
        {testimonials.map((_t, number) => (
          <button key={number} onClick={() => setIndex(number)}>
            <span
              className={`w-4 h-4 block rounded-full transition-all duration-500 ${
                index === number ? "bg-secondary-color" : "bg-black"
              }`}
            ></span>
          </button>
        ))}
      </div>

      <div className="hidden md:flex items-center justify-center gap-2 px-4 flex-wrap lg:flex-nowrap">
        {testimonials.map((t, index) => (
          <div className="flex flex-col items-start" key={index}>
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src={t.img}
                alt="Profile"
                width={100}
                height={100}
                className="object-contain rounded-full"
              />
              <div className="flex flex-col items-start">
                <span className="text-main-color font-medium text-xl italic">
                  {t.name}
                </span>
                <span className="italic">{t.location}</span>
              </div>
            </div>
            <div className="bg-white min-h-[280px] px-4 py-6 text-main-color italic rounded-md mt-6 relative test-before">
              <p className="text-justify text-lg">{t.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
