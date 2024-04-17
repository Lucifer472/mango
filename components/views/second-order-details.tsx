"use client";

import { handleKeyDown } from "@/lib/utils";
import {
  useDozenState,
  useGradeState,
  useOrderState,
  usePriceState,
} from "@/states";

export const SecondDetailForm = () => {
  const [setLoading, setMsg] = useOrderState((state) => [
    state.setLoading,
    state.setMsg,
  ]);

  const price = usePriceState((state) => state.price);

  const grade = useGradeState((state) => state.grade);
  const dozen = useDozenState((state) => state.dozen);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading();

    const formData = new FormData(e.currentTarget);

    formData.append("grade", "Ads");
    formData.append("dozen", "10");

    formData.append("amount", (price.a3 * 10).toString());

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
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6 mt-6 py-8 border border-black rounded-md px-6"
    >
      <div className="flex flex-col w-full gap-y-4">
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Name:
          </label>
          <input
            name="name"
            type="text"
            className="w-full py-3 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Mobile Number:
          </label>
          <input
            name="number"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            onKeyDown={handleKeyDown}
            maxLength={10}
            minLength={10}
            className="w-full py-3 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
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
            className="w-full py-3 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
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
            className="w-full py-3 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            City:
          </label>
          <select
            name="city"
            defaultValue={"gandhinagar"}
            className="w-full py-3 px-4 border border-gray-700 rounded-md bg-white focus:border-secondary-color outline-none"
          >
            <option value="gandhinagar">Gandhinagar</option>
            <option value="ahmadabad">Ahmadabad</option>
            <option value="rajkot">Rajkot</option>
            <option value="surat">Surat</option>
            <option value="vadodara">Vadodara</option>
          </select>
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="italic text-sm text-main-color font-semibold">
            Pincode:
          </label>
          <input
            name="pincode"
            pattern="[0-9]*"
            inputMode="numeric"
            type="text"
            onKeyDown={handleKeyDown}
            minLength={6}
            maxLength={6}
            required
            className="w-full py-3 px-4 border border-gray-700 rounded-md focus:border-secondary-color outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-800 text-center py-4 text-white font-medium rounded-md animate-pulse"
      >
        Confirm Order
      </button>
    </form>
  );
};
