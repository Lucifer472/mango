import { create } from "zustand";

interface ISidebar {
  open: boolean;
  setOpen: () => void;
}

export const useSidebarState = create<ISidebar>((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));
