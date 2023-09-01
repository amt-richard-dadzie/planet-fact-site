import { useParams } from "react-router-dom";
import data from "./data.json";
import { PlantProps } from "./interface";
import { PlanetFacts } from "./components/PlanetFacts/PlanetFacts";
import { useState } from "react";
import Header from "./components/Header/Header";

const Planets = () => {
  const { name } = useParams();

  const [selectedCategory, setSelectedCategory] = useState("overview");

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const planets: PlantProps[] = data;

  const planet = planets.find((planet) => planet.name === name);

  return (
    <>
      <Header />
      {planet && (
        <PlanetFacts
          name={planet.name}
          images={planet.images}
          rotation={planet.rotation}
          revolution={planet.revolution}
          radius={planet.radius}
          temperature={planet.temperature}
          overview={planet.overview}
          geology={planet.geology}
          structure={planet.structure}
          selectedCategory={selectedCategory}
          handleSelectedCategory={handleSelectedCategory}
        />
      )}
    </>
  );
};

export default Planets;
