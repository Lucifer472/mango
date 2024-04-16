"use client";

import { handleKeyDown } from "@/lib/utils";
import { useDozenState, useGradeState, useOrderState } from "@/states";

export const DetailForm = () => {
  const [setLoading, setMsg] = useOrderState((state) => [
    state.setLoading,
    state.setMsg,
  ]);

  const grade = useGradeState((state) => state.grade);
  const dozen = useDozenState((state) => state.dozen);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading();

    const formData = new FormData(e.currentTarget);

    formData.append("grade", grade);
    formData.append("dozen", dozen.toString());

    formData.append(
      "amount",
      grade === "A" ? (220 * dozen).toString() : (180 * dozen).toString()
    );

    const sheetUrl =
      "https://script.google.com/macros/s/AKfycbwb1ceY78VCCMy3Cu4IEQ2kGc7hHqO4pJXlEVkP5LfSlnD_1sqJh89x1fv9PGmUfftOZQ/exec";

    try {
      fetch(sheetUrl, {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            if (res.result === "success") {
              setMsg("confirm!");
            } else {
              setMsg("Please Try Again!");
            }
          });
        } else {
          setMsg("Please Try Again!");
        }
      });
    } catch (error) {
      console.log(error);
      setMsg("Please Try Again!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 mt-4">
      <div className="flex items-center justify-start">
        <span className="pl-[6px] mr-[18px] h-[24px] pr-[2px] bg-[#391c01] flex items-center justify-center italic text-white text-[12px] relative step-after">
          STEP 3
        </span>
        <p className="italic text-[#391c01] font-bold text-sm">
          Fill in Details:
        </p>
      </div>
      <div className="flex flex-col w-full gap-y-4">
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Name:
          </label>
          <input
            name="name"
            type="text"
            className="w-full py-2 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            placeholder="Your Name..."
            required
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Number:
          </label>
          <input
            name="number"
            type="text"
            onKeyDown={handleKeyDown}
            maxLength={10}
            minLength={10}
            className="w-full py-2 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            placeholder="Your Phone Number..."
            required
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Apartment Number/House Number:
          </label>
          <input
            name="apt"
            type="text"
            className="w-full py-2 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            placeholder="Apartment Number/House Number..."
            required
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Street Name:
          </label>
          <input
            name="street"
            type="text"
            className="w-full py-2 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            placeholder="Street Name..."
            required
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Landmark (if any):
          </label>
          <input
            name="landmark"
            type="text"
            className="w-full py-2 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            placeholder="Landmark..."
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            City:
          </label>
          <input
            name="city"
            type="text"
            className="w-full py-2 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            placeholder="Name of City..."
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Pincode:
          </label>
          <input
            name="pincode"
            type="text"
            onKeyDown={handleKeyDown}
            maxLength={6}
            minLength={6}
            className="w-full py-2 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            placeholder="Pincode..."
          />
        </div>
      </div>
      <div className="flex items-center justify-between py-4 px-2 bg-white border border-slate-500 rounded-md">
        <span>Total Order Value:</span>
        <span>
          {dozen} x ₹{grade === "A" ? 220 : 180} : ₹
          {grade === "A" ? 220 * dozen : 180 * dozen}
        </span>
      </div>
      <button
        type="submit"
        className="w-full bg-secondary-color text-center py-4 text-white font-medium rounded-md"
      >
        Confirm Order
      </button>
    </form>
  );
};
