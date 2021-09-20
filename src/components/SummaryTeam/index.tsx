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
        <Card.Title className={styles.titleCard} role="listitem">
          Combat:{combat}
        </Card.Title>
        <Card.Title className={styles.titleCard} role="listitem">
          Intelligent:{intelligence}
        </Card.Title>
        <Card.Title className={styles.titleCard}>Power:{power}</Card.Title>
        <Card.Title className={styles.titleCard}>Speed:{speed}</Card.Title>
        <Card.Title className={styles.titleCard} role="listitem">
          Strength:{strength}
        </Card.Title>
        <Card.Title className={styles.titleCard} role="listitem">
          Durability:{durability}
        </Card.Title>
        <Card.Title className={styles.titleCard} role="listitem">
          Weight:{weight}kg
        </Card.Title>
        <Card.Title className={styles.titleCard} role="listitem">
          Height:{height}cm
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
