import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import StarshipCard from "./components/StarshipCard";
import StarshipDetail from "./components/StarshipDetail";

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
      <div className="cardList">
        {starships.map((starship,i) => 
        <StarshipCard key={i} starship={starship} />
      )}
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/starship/:name/" element={<StarshipDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
