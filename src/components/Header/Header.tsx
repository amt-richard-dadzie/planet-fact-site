import data from "../../data.json";
import * as C from "./styles";
import { Link } from "react-router-dom";

interface Props {
  name: string;
}

const Header = () => {
  const planets: Props[] = data;

  return (
    <C.Header>
      <h1>
        <Link to={"/"}>The PLANETS</Link>
      </h1>
      <nav>
        <ul>
          {planets.map((planet) => {
            return (
              <li>
                <Link to={`/planet/${planet.name}`}>{planet.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </C.Header>
  );
};

export default Header;
