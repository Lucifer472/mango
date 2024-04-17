import { create } from "zustand";

interface ISidebar {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export const useSidebarState = create<ISidebar>((set) => ({
  open: false,
  setOpen: (v) => set({ open: v }),
}));

interface IGrade {
  grade: "A" | "B";
  setGrade: (v: "A" | "B") => void;
}

export const useGradeState = create<IGrade>((set) => ({
  grade: "A",
  setGrade: (v) => set({ grade: v }),
}));

interface IDozens {
  dozen: number;
  setDozen: (v: number) => void;
}

export const useDozenState = create<IDozens>((set) => ({
  dozen: 10,
  setDozen: (v) => set({ dozen: v }),
}));

interface IOrder {
  msg: string | null;
  setMsg: (v: string | null) => void;
  loading: boolean;
  setLoading: () => void;
}

export const useOrderState = create<IOrder>((set) => ({
  msg: null,
  setMsg: (v) => set({ msg: v }),
  loading: false,
  setLoading: () => set((state) => ({ loading: !state.loading })),
}));

interface IPrice {
  price: { a1: number; a2: number; a3: number };
  setPrice: (v: { a1: number; a2: number; a3: number }) => void;
}

export const usePriceState = create<IPrice>((set) => ({
  price: { a1: 220, a2: 180, a3: 180 },
  setPrice: (v) => set({ price: v }),
}));
