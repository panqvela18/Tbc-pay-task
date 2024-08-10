import { usePageCounterStore } from "../context/store";

export default function usePageCounter() {
  const pageCount = usePageCounterStore((state) => state.pageCount);
  const incrementPageCount = usePageCounterStore(
    (state) => state.incrementPageCount
  );
  const decrementPageCount = usePageCounterStore(
    (state) => state.decrementPageCount
  );
  const resetPageCount = usePageCounterStore((state) => state.resetPageCount);

  return {
    pageCount,
    incrementPageCount,
    decrementPageCount,
    resetPageCount,
  };
}
