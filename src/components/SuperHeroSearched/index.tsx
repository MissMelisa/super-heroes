import { Card } from "react-bootstrap";
import styles from "./styles.module.css";

type SuperHeroProps = {
  image: string;
  name: string;
};

export default function SuperHeroSearched({ name, image }: SuperHeroProps) {
  return (
    <Card className={styles.containerSuperHero}>
      <Card.Img src={image} alt={name} className={styles.imageSuperHero} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
