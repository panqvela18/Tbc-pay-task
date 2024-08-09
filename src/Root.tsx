import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
