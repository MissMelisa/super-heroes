import { useState } from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AddCard from "../../components/AddCard";
import { useAuth } from "../../components/AuthContext";
import ExtraData from "../../components/Extradata";
import NavBar from "../../components/NavBar";
import SuperHero from "../../components/SuperHero";
import { useSuperHero } from "../../components/SuperHeroContext";
import { TeamSummary } from "../../types";
import styles from "./styles.module.css";

export default function Home() {
  const { myTeam, deleteHero } = useSuperHero();
  const { signOut } = useAuth();
  const history = useHistory();

  const [modalShow, setModalShow] = useState<boolean>(false);
  function redirect() {
    history.push("/search-hero");
  }

  const total = myTeam.reduce(
    (total, item) => {
      total.intelligence += parseInt(item.powerstats.intelligence as any);
      total.combat += parseInt(item.powerstats.combat as any);
      total.speed += parseInt(item.powerstats.speed as any);
      total.power += parseInt(item.powerstats.power as any);
      total.strength += parseInt(item.powerstats.strength as any);
      total.durability += parseInt(item.powerstats.durability as any);
      total.weight += parseInt(item.weight as any);
      total.height += parseInt(item.height as any);

      return total;
    },
    {
      intelligence: 0,
      combat: 0,
      durability: 0,
      power: 0,
      speed: 0,
      strength: 0,
      weight: 0,
      height: 0,
    } as TeamSummary
  );

  return (
    <Container className={styles.containerHome}>
      <NavBar
        intelligence={total.intelligence}
        combat={total.combat}
        power={total.power}
        strength={total.strength}
        durability={total.durability}
        speed={total.speed}
        height={total.height}
        signOut={signOut}
        weight={total.weight}
      />
      <Card.Title className={styles.titleHome}>Your team</Card.Title>
      <Row className={styles.rowSuperHeroes}>
        <AddCard onClick={redirect} />

        {myTeam.map((item) => (
          <SuperHero
            key={item.id}
            onDelete={() => deleteHero(item.id)}
            onClick={() => setModalShow(true)}
            image={item.image}
            name={item.name}
            powerstats={item.powerstats}
          />
        ))}

        {modalShow === true &&
          myTeam.map((item) => (
            <ExtraData
              key={item.id}
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
