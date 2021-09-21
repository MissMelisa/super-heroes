import { Card, Image } from "react-bootstrap";

import styles from "./styles.module.css";

type SuperHeroProps = {
  image: string;
  name: string;
  id: string;
  onClick: () => void;
};

export default function SuperHeroSearched({
  name,
  image,
  onClick,
}: SuperHeroProps) {
  return (
    <Card className={styles.containerSuperHero} role="listitem">
      <Card.Img src={image} alt={name} className={styles.imageSuperHero} />
      <Card.Body>
        <Card.Title className={styles.nameSuperHero}> {name}</Card.Title>
      </Card.Body>
      <Image
        alt="Plus"
        fluid
        src="images/plus.svg"
        className={styles.add}
        onClick={onClick}
      />
    </Card>
  );
}
