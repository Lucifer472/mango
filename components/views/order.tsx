"use client";

import { DetailForm } from "../order/detail-form";
import { SelectDozen } from "../order/select-dozen";
import { SelectGrade } from "../order/select-grade";

export const OrderMenu = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <SelectGrade />
      <SelectDozen />
      <DetailForm />
    </div>
  );
};
