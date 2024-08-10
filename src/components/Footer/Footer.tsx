import logo from "../../assets/footer-logo.svg";
import fbLogo from "../../assets/social-fb.svg";
import inLogo from "../../assets/social-in.svg";
import Navigation from "../Header/Navigation";

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between px-[5%] py-5 bg-white">
        <img src={logo} alt="logo" />
        <Navigation />
      </div>
      <div className=" flex items-center justify-between bg-[#28445c] px-[5%] py-5">
        <div className="flex items-center">
          <a href="https://www.facebook.com/tbcpayge" target="_blank">
            <img className="w-5 mr-1" src={fbLogo} alt="fblogo" />
          </a>
          <a href="https://www.linkedin.com/company/tbc-pay/" target="_blank">
            <img className="w-5" src={inLogo} alt="inLogo" />
          </a>
        </div>
        <p className="text-[#f1f5f5b3]">© TBC PAY 2024</p>
      </div>
    </footer>
  );
}
