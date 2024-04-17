"use client";

import { useEffect } from "react";
import { usePriceState } from "@/states";
import { fetchPrice } from "@/action/fetch-price";

export const InitialPrice = () => {
  const setPrice = usePriceState((state) => state.setPrice);

  useEffect(() => {
    fetchPrice().then((res) => {
      setPrice({
        a1: res[0],
        a2: res[1],
        a3: res[2],
      });
    });
  }, [setPrice]);

  return <></>;
};
