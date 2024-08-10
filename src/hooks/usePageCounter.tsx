import { usePageCounterStore } from "../context/store";

export default function usePageCounter() {
  const pageCount = usePageCounterStore((state) => state.pageCount);
  const incrementPageCount = usePageCounterStore(
    (state) => state.incrementPageCount
  );
  const decrementPageCount = usePageCounterStore(
    (state) => state.decrementPageCount
  );

  return {
    pageCount,
    incrementPageCount,
    decrementPageCount,
  };
}
