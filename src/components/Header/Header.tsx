import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[5%] py-5 bg-white">
      <img src={logo} alt="logo" />
      <nav>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/registration"}>Registation</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
