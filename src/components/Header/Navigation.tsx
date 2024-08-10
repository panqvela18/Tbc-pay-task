import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center">
        <li className="bg-[#00adee] p-2 rounded text-white font-semibold">
          <Link to={"/"}>მთავარი</Link>
        </li>
      </ul>
    </nav>
  );
}
