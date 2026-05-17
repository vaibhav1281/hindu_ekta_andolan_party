import Card from "./Card";

const Cards = () => {
  return (
    <ul className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4">
      <li className="carousel-item">
        <Card />
      </li>
      <li className="carousel-item">
        <Card />
      </li>
      <li className="carousel-item">
        <Card />
      </li>
      <li className="carousel-item">
        <Card />
      </li>
    </ul>
  );
};

export default Cards;
