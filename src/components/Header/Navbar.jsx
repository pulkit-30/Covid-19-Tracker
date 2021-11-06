import Style from "./Navbar.module.css";
import Flex from "../UI/Flex";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Flex className={Style.background}>
      <Flex className={Style.nav}>
        <Link to="/" className="white">
          Home
        </Link>
        <Link to="/worldcases" className="white">
          WorldWide Cases
        </Link>
        <Link to="/graph" className="white">
          Graphs
        </Link>
        <Link to="/vacine" className="white">
          Vaccine Deatils
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
