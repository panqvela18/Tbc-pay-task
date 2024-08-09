import logo from "../../assets/logo.svg";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[5%] py-5 bg-white">
      <img src={logo} alt="logo" />
      <Navigation />
    </header>
  );
}
