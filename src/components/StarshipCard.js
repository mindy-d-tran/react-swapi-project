import { Link } from "react-router-dom";

export default function StarshipCard({starship}) {
  const {name} =starship;
  return (
    <div className="card">
      <Link to={`/starship/${name}`} >
        <h1>{name}</h1>
      </Link>
    </div>
  );
}
