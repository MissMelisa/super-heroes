import { Card, Image } from "react-bootstrap";
import styles from "./styles.module.css";

type Props = { onClick: () => void };

export default function AddCard({ onClick }: Props) {
  return (
    <Card className={styles.containerAdd} bg="light">
      <Card.Body className={styles.cardBody}>
        <Image
          className={styles.imageAdd}
          alt="Plus"
          fluid
          src="images/plus.svg"
          onClick={onClick}
          role="button"
        />
        <Card.Text className={styles.addText}>Add a superhero</Card.Text>
      </Card.Body>
    </Card>
  );
}
