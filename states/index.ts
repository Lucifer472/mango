import { create } from "zustand";

interface ISidebar {
  open: boolean;
  setOpen: () => void;
}

export const useSidebarState = create<ISidebar>((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
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
