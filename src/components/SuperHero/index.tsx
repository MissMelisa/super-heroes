import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

type SuperHeroProps = {
  name: string;
  image: string;
  powerstats: string;
  onClick: () => void;
};

export default function SuperHero({
  name,
  image,
  powerstats,
  onClick,
}: SuperHeroProps) {
  return (
    <Card>
      <Card.Img src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{powerstats}</Card.Text>
        <Button onClick={onClick}>See more...</Button>
      </Card.Body>
    </Card>
  );
}
