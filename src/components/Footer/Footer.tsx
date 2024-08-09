import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.svg";
import fbLogo from "../../assets/social-fb.svg";
import inLogo from "../../assets/social-in.svg";

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between px-[5%] py-5 bg-white">
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
      </div>
      <div className=" flex items-center justify-between bg-[#28445c] px-[5%] py-5">
        <div className="flex items-center">
          <img className="w-5 mr-1" src={fbLogo} alt="fblogo" />
          <img className="w-5" src={inLogo} alt="inLogo" />
        </div>
        <p className="text-[#f1f5f5b3]">© TBC PAY 2024</p>
      </div>
    </footer>
  );
}
