import { Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AddCard from "../../components/AddCard";
import styles from "./styles.module.css";

export default function Home() {
  const history = useHistory();

  function redirect() {
    history.push("/search-hero");
  }
  return (
    <Container className={styles.containerHome}>
      <Card.Title>Tu equipo</Card.Title>
      <AddCard onClick={redirect} />
    </Container>
  );
}
