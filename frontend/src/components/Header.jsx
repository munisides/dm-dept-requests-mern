import { BiBuildingHouse, BiBuilding, BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>University Department</h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/design">
            <BiBuildingHouse /> Design and Construction
          </Link>
        </li>
        <li>
          <Link to="/space">
            <BiBuilding /> Space Management
          </Link>
        </li>
        <li>
          <Link to="/request">
            <BiDetail /> Project Request
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
