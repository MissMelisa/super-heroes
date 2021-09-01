import { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AddCard from "../../components/AddCard";
import ExtraData from "../../components/Extradata";
import SuperHero from "../../components/SuperHero";
import { useSuperHero } from "../../components/SuperHeroContext";
import styles from "./styles.module.css";

export default function Home() {
  const { myTeam } = useSuperHero();
  const history = useHistory();

  const [modalShow, setModalShow] = useState<boolean>(false);
  function redirect() {
    history.push("/search-hero");
  }

  return (
    <Container className={styles.containerHome}>
      <Card.Title className={styles.titleHome}>Your team</Card.Title>
      <Row className={styles.rowSuperHeroes}>
        <AddCard onClick={redirect} />
        {myTeam.map((item) => (
          <SuperHero
            onClick={() => setModalShow(true)}
            image={item.image}
            name={item.name}
            powerstats={item.powerstats}
          />
        ))}
        {modalShow === true &&
          myTeam.map((item) => (
            <ExtraData
              aliases={item.aliases && item.aliases.join()}
              show={modalShow}
              onHide={() => setModalShow(false)}
              name={item.name}
              height={item.height}
              eyeColor={item.eyeColor}
              hairColor={item.hairColor}
              weight={item.weight}
              fullName={item.fullName}
              work={item.work}
            />
          ))}
      </Row>
    </Container>
  );
}
