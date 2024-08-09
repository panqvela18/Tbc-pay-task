import { create } from "zustand";

type PageCounterStore = {
    pageCount: number;
    incrementPageCount: () => void;
    decrementPageCount: () => void;
};

export const usePageCounterStore = create<PageCounterStore>((set) => ({
    pageCount: 0,
    incrementPageCount: () =>
        set((state) => ({ pageCount: state.pageCount + 1 })),
    decrementPageCount: () =>
        set((state) => ({ pageCount: state.pageCount - 1 })),
}));
