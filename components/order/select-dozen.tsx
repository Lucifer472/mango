"use client";

import { dozens } from "@/constant";
import { useDozenState } from "@/states";

export const SelectDozen = () => {
  const [dozen, setDozen] = useDozenState((state) => [
    state.dozen,
    state.setDozen,
  ]);

  return (
    <>
      <div className="flex items-center justify-start mt-4">
        <span className="pl-[6px] mr-[18px] h-[24px] pr-[2px] bg-[#391c01] flex items-center justify-center italic text-white text-[12px] relative step-after">
          STEP 2
        </span>
        <p className="italic text-[#391c01] font-bold text-sm ">
          Select Quantity (In Kg):
        </p>
      </div>
      <div className="overflow-x-scroll overflow-y-hidden w-full mt-4">
        <div className="w-full flex items-start gap-x-4">
          {dozens.map((d) => (
            <button
              className={`relative bg-white px-4 py-2 border ${
                d === dozen ? "border-secondary-color" : "border-gray-700"
              }  rounded-md`}
              key={d}
              onClick={() => setDozen(d)}
            >
              {d == dozen && (
                <div className="absolute top-1 right-1">
                  <span className="block w-2 h-2 bg-secondary-color rounded-full"></span>
                </div>
              )}
              {d}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
