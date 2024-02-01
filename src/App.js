import "./App.css";
import { useState, useEffect } from "react";
import StarshipCard from "./components/StarshipCard";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://swapi.dev/api/starships/");
      const data = await res.json();
      setStarships(data.results);
    };

    fetchData();
  }, []);
  // console.log(starships.results);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      {starships.map((starship,i) => 
        <StarshipCard key={i} starship={starship} />
      )}
    </div>
  );
}

export default App;
