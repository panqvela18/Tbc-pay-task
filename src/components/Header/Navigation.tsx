import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center">
        <li className="mr-4">
          <Link to={"/"}>მთავარი</Link>
        </li>
      </ul>
    </nav>
  );
}
