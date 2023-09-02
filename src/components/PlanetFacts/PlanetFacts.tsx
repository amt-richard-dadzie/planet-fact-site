import * as C from "./styles";
import { PlantFactProps } from "../../interface";
import { planetColors } from "../../colors";
import Svg from "/assets/icon-source.svg";

export const PlanetFacts = ({
  name,
  images,
  overview,
  structure,
  geology,
  rotation,
  revolution,
  radius,
  temperature,
  selectedCategory,
  handleSelectedCategory,
}: PlantFactProps) => {
  let content = "";
  let source = "";
  let image = "";

  const backgroundColor = planetColors[name];

  if (selectedCategory === "overview") {
    content = overview.content;
    source = overview.source;
    image = images.planet;
  } else if (selectedCategory === "structure") {
    content = structure.content;
    source = structure.source;
    image = images.internal;
  } else if (selectedCategory === "geology") {
    content = geology.content;
    source = geology.source;
    image = images.geology;
  }

  return (
    <C.PlanetCard>
      <div className="category">
        <div
          className="overview"
          onClick={() => handleSelectedCategory("overview")}
          style={{
            backgroundColor:
              selectedCategory === "overview" ? backgroundColor : "",
          }}
        >
          <p>
            <span>01</span>
            OVERVIEW
          </p>
        </div>
        <div
          className="structure"
          onClick={() => handleSelectedCategory("structure")}
          style={{
            backgroundColor:
              selectedCategory === "structure" ? backgroundColor : "",
          }}
        >
          <p>
            <span>02</span>
            INTERNAL STRUCTURE
          </p>
        </div>
        <div
          className="geology"
          onClick={() => handleSelectedCategory("geology")}
          style={{
            backgroundColor:
              selectedCategory === "geology" ? backgroundColor : "",
          }}
        >
          <p>
            <span>03</span>
            GEOLOGY
          </p>
        </div>
      </div>
      <div className="planet-image">
        <img src={image} alt="" />
      </div>
      <div className="planet-info">
        <h2>{name}</h2>
        <p>{content}</p>
        <p className="source">
          Source: <a href={source}>Wikipedia</a>
          <img src={Svg} alt="" width="8px" />
        </p>
      </div>
      <div className="planet-stat">
        <div>
          <p>
            <span>ROTATION TIME</span>
            {rotation}
          </p>
        </div>
        <div>
          <p>
            <span>REVOLUTION TIME</span>
            {revolution}
          </p>
        </div>
        <div>
          <p>
            <span>RADIUS</span>
            {radius}
          </p>
        </div>
        <div>
          <p>
            <span>AVERAGE TEMP</span>
            {temperature}
          </p>
        </div>
      </div>
    </C.PlanetCard>
  );
};
