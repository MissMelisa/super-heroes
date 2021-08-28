import { Card, Image } from "react-bootstrap";
import styles from "./styles.module.css";

type Props = { onClick: () => void };

export default function AddCard({ onClick }: Props) {
  return (
    <Card className={styles.containerAdd}>
      <Card.Body>
        <Image alt="Plus" fluid src="images/plus.svg" onClick={onClick} />
      </Card.Body>
    </Card>
  );
}
