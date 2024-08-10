import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[5%] py-5 bg-white">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <Navigation />
    </header>
  );
}
