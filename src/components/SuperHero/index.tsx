import { Button, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Powerstats } from "../../types";
import styles from "./styles.module.css";

type SuperHeroProps = {
  name?: string;
  image: string;
  powerstats: Powerstats;
  onClick: () => void;
  onDelete: () => void;
};

export default function SuperHero({
  name,
  image,
  powerstats,
  onClick,
  onDelete,
}: SuperHeroProps) {
  return (
    <Card className={styles.cardContainer}>
      <Image
        src="images/delete.svg"
        onClick={onDelete}
        className={styles.delete}
      />
      <Card.Img src={image} alt={name} className={styles.imageSuperHero} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.nameSuperHero}>{name}</Card.Title>
        <Card.Text>Intelligence:{powerstats.intelligence}</Card.Text>
        <Card.Text>Combat:{powerstats.combat}</Card.Text>
        <Card.Text>Durability:{powerstats.durability}</Card.Text>
        <Card.Text>Power:{powerstats.power}</Card.Text>
        <Card.Text>Speed:{powerstats.speed}</Card.Text>
        <Card.Text>Strength:{powerstats.strength}</Card.Text>

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
