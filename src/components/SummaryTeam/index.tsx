import { Card } from "react-bootstrap";
import { TeamSummary } from "../../types";
import styles from "./styles.module.css";

export default function SummaryTeam({
  powerstats,
  height,
  weight,
}: TeamSummary) {
  const { combat, intelligence, power, speed, strength, durability } =
    powerstats;
  return (
    <Card bg="light" className={styles.cardContainer}>
      <Card.Title className={styles.titleTotal}>Total: </Card.Title>
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.titleCard}>Combat:{combat}</Card.Title>
        <Card.Title className={styles.titleCard}>
          Intelligent:{intelligence}
        </Card.Title>
        <Card.Title className={styles.titleCard}>Power:{power}</Card.Title>
        <Card.Title className={styles.titleCard}>Speed:{speed}</Card.Title>
        <Card.Title className={styles.titleCard}>
          Strength:{strength}
        </Card.Title>
        <Card.Title className={styles.titleCard}>
          Durability:{durability}
        </Card.Title>
        <Card.Title className={styles.titleCard}>Weight:{weight}kg</Card.Title>
        <Card.Title className={styles.titleCard}>Height:{height}cm</Card.Title>
      </Card.Body>
    </Card>
  );
}
