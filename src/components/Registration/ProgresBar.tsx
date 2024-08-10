export default function ProgresBar({ pageCount }: { pageCount: number }) {
  return (
    <div className="relative w-full h-2 bg-gray-200 rounded">
      <div
        className="absolute top-0 left-0 h-2 bg-[#d8046c] rounded"
        style={{
          width:
            pageCount === 0
              ? "0%"
              : pageCount === 1
              ? "33.3%"
              : pageCount === 2
              ? "66.7%"
              : "100%",
        }}
      ></div>
    </div>
  );
}
