import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Powerstats } from "../../types";
import styles from "./styles.module.css";

type SuperHeroProps = {
  name?: string;
  image: string;
  powerstats: Powerstats;
  onClick: () => void;
};

export default function SuperHero({
  name,
  image,
  powerstats,
  onClick,
}: SuperHeroProps) {
  return (
    <Card className={styles.cardContainer}>
      <Card.Img src={image} alt={name} className={styles.imageSuperHero} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.nameSuperHero}>{name}</Card.Title>
        <Card.Text>Intelligencia:{powerstats.intelligence}</Card.Text>
        <Card.Text>Combate:{powerstats.combat}</Card.Text>
        <Card.Text>Duracion:{powerstats.durability}</Card.Text>
        <Card.Text>Poder:{powerstats.power}</Card.Text>
        <Card.Text>Velocidad:{powerstats.speed}</Card.Text>
        <Card.Text>Fuerza:{powerstats.strength}</Card.Text>
        <Button
          onClick={onClick}
          type="submit"
          variant="info"
          className={styles.buttonSeeMore}
        >
          See more...
        </Button>
      </Card.Body>
    </Card>
  );
}
