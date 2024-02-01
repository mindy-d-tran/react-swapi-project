export default function StarshipCard({starship}) {
  const {name} =starship;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
