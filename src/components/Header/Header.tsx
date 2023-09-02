import data from "../../data.json";
import * as C from "./styles";
import { Link } from "react-router-dom";
import hamburger from "/assets/icon-hamburger.svg";
import chevron from "/assets/icon-chevron.svg";
import { planetColors } from "../../colors";
import { useState } from "react";

interface Props {
  name: string;
  images: {
    planet: string;
  };
}

const Header = () => {
  const planets: Props[] = data;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (planet: string) => {
    document.documentElement.style.setProperty(
      "--bg-color",
      planetColors[planet]
    );
  };

  return (
    <C.Header>
      <h1>
        <Link to={"/"}>The PLANETS</Link>
      </h1>
      <img src={hamburger} className="menu-icon" alt="" onClick={toggleMenu} />
      <nav className={isMenuOpen ? "active" : ""}>
        <ul>
          {planets.map((planet) => {
            return (
              <li key={planet.name}>
                <div className="container">
                  <img
                    className="planet-icon"
                    src={planet.images.planet}
                    width="20px"
                    height="20px"
                    alt=""
                  />
                  <Link
                    to={`/planet/${planet.name}`}
                    onMouseEnter={() => handleMouseEnter(planet.name)}
                  >
                    {planet.name}
                  </Link>
                </div>
                <img src={chevron} className="chevron-icon" alt="" />
              </li>
            );
          })}
        </ul>
      </nav>
    </C.Header>
  );
};

export default Header;
