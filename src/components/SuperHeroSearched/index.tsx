import { Card, Image } from "react-bootstrap";
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
        <Card.Title className={styles.nameSuperHero}> {name}</Card.Title>
      </Card.Body>
      <Image alt="Plus" fluid src="images/plus.svg" className={styles.add} />
    </Card>
  );
}