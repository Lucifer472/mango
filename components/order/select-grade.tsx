"use client";

import { useGradeState, usePriceState } from "@/states";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const SelectGrade = () => {
  const price = usePriceState((state) => state.price);

  const [grade, setGrade] = useGradeState((state) => [
    state.grade,
    state.setGrade,
  ]);

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start">
          <span className="pl-[6px] mr-[18px] h-[24px] pr-[2px] bg-[#391c01] flex items-center justify-center italic text-white text-[12px] relative step-after">
            STEP 1
          </span>
          <p className="italic text-[#391c01] font-bold text-sm">
            Select Grade (Size) (1 out of 2):
          </p>
        </div>
        <button className="text-[12px] italic text-gray-700 font-bold border-b border-gray-700 leading-none">
          More Details
        </button>
      </div>
      <div className="w-full mt-4">
        <div className="w-full flex items-start gap-x-4">
          <button
            className={`flex items-center flex-col justify-between px-6 py-4 bg-white border rounded-md min-w-[150px] relative ${
              grade === "A" ? "border-secondary-color" : "border-gray-600"
            }`}
            onClick={() => setGrade("A")}
          >
            {grade === "A" && (
              <div className="absolute top-2 right-2">
                <span className="block w-2 h-2 bg-secondary-color rounded-full"></span>
              </div>
            )}
            <span className="text-center">A1+</span>
            <HiOutlineDotsHorizontal className="text-secondary-color text-2xl w-full text-center" />
            <div className="flex flex-col items-center justify-center w-full">
              <p>
                ₹ {price.a1}
                <span className="text-xs italic text-main-color">/Kg</span>
              </p>
              <span className="text-[12px] text-secondary-color">
                (275 gm avg.)
              </span>
            </div>
          </button>
          <button
            className={`flex items-center flex-col justify-between px-6 py-4 bg-white border rounded-md min-w-[150px] relative ${
              grade === "B" ? "border-secondary-color" : "border-gray-600"
            }`}
            onClick={() => setGrade("B")}
          >
            {grade === "B" && (
              <div className="absolute top-2 right-2">
                <span className="block w-2 h-2 bg-secondary-color rounded-full"></span>
              </div>
            )}
            <span className="text-center">A1</span>
            <HiOutlineDotsHorizontal className="text-secondary-color text-2xl w-full text-center" />
            <div className="flex flex-col items-center justify-center w-full">
              <p>
                ₹ {price.a2}
                <span className="text-xs italic text-main-color">/Kg</span>
              </p>
              <span className="text-[12px] text-secondary-color">
                (225 gm avg.)
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
