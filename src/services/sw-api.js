import { useEffect } from "react";

export default function getAllStarships() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://swapi.dev/api/starships/");
      const data = await res.json();
      console.log(data);
      return data;
    };
    fetchData();
  }, []);
}
