import * as C from "./styles";
import { PlantFactProps } from "../../interface";

export const PlanetFacts = ({
  name,
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

  if (selectedCategory === "overview") {
    content = overview.content;
    source = overview.source;
  } else if (selectedCategory === "structure") {
    content = structure.content;
    source = structure.source;
  } else if (selectedCategory === "geology") {
    content = geology.content;
    source = geology.source;
  }

  return (
    <C.PlanetCard>
      <div className="planet-image">PlanetFacts</div>
      <div className="planet-info">
        <h2>{name}</h2>
        <p>{content}</p>
        <p>{source}</p>
        <div className="catergory">
          <div
            className="overview"
            onClick={() => handleSelectedCategory("overview")}
          >
            <p>
              <span>01</span>
              OVERVIEW
            </p>
          </div>
          <div
            className="structure"
            onClick={() => handleSelectedCategory("structure")}
          >
            <p>
              <span>02</span>
              INTERNAL STRUCTURE
            </p>
          </div>
          <div
            className="geology"
            onClick={() => handleSelectedCategory("geology")}
          >
            <p>
              <span>03</span>
              GEOLOGY
            </p>
          </div>
        </div>
      </div>
      <div className="planet-stat">
        <div>
          <p>{rotation}</p>
        </div>
        <div>
          <p>{revolution}</p>
        </div>
        <div>
          <p>{radius}</p>
        </div>
        <div>
          <p>{temperature}</p>
        </div>
      </div>
    </C.PlanetCard>
  );
};
