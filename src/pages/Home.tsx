import { Link, useLocation } from "react-router-dom";
import usePageCounter from "../hooks/usePageCounter";
import { useEffect } from "react";

export default function Home() {
  const { resetPageCount } = usePageCounter();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      resetPageCount();
    }
  }, [pathname, resetPageCount]);

  return (
    <main>
      <div className="flex justify-center items-center bg-gray-100 max-sm:mx-12">
        <div className="bg-white shadow-lg rounded-lg max-w-sm p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            არ გაქვს ექაუნთი?
          </h2>
          <p className="text-gray-600 mb-6">
            შემოგვიერთდით დღეს, რომ ისარგებლოთ ჩვენს მიერ შემოთავაზებული ყველა
            უპირატესობითა და ფუნქციით!
          </p>
          <Link
            to="/registration"
            className="inline-block bg-[#d8046c] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#c7005d] transition duration-300"
          >
            დარეგისტრირდი
          </Link>
        </div>
      </div>
    </main>
  );
}
