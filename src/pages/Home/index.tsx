import { useState } from "react";
import { Alert, Card, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AddCard from "../../components/AddCard";
import { useAuth } from "../../components/AuthContext";
import ExtraData from "../../components/Extradata";
import NavBar from "../../components/NavBar";
import SummaryTeam from "../../components/SummaryTeam";
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

  const teamSummary = myTeam.reduce(
    (total, item) => {
      total.powerstats.intelligence += parseInt(
        item.powerstats.intelligence as any
      );
      total.powerstats.combat += parseInt(item.powerstats.combat as any);
      total.powerstats.speed += parseInt(item.powerstats.speed as any);
      total.powerstats.power += parseInt(item.powerstats.power as any);
      total.powerstats.strength += parseInt(item.powerstats.strength as any);
      total.powerstats.durability += parseInt(
        item.powerstats.durability as any
      );
      total.weight += parseInt(item.weight as any);
      total.height += parseInt(item.height as any);

      return total;
    },
    {
      powerstats: {
        intelligence: 0,
        combat: 0,
        durability: 0,
        power: 0,
        speed: 0,
        strength: 0,
      },
      weight: 0,
      height: 0,
    } as TeamSummary
  );

  const entries = Object.entries(teamSummary.powerstats);
  const maximumStat = entries.reduce((maxStat, attribute) => {
    if (attribute[1] > maxStat[1]) {
      return attribute;
    } else {
      return maxStat;
    }
  }, entries[0]);

  return (
    <Container className={styles.containerHome}>
      <NavBar signOut={signOut} />
      {maximumStat[1] > 2 && (
        <Alert className={styles.alert} variant="info">
          Team's type: {maximumStat[0]} ({maximumStat[1]})
        </Alert>
      )}
      <Container className={styles.header}>
        <SummaryTeam
          powerstats={teamSummary.powerstats}
          height={teamSummary.height ? teamSummary.height / myTeam.length : 0}
          weight={teamSummary.weight ? teamSummary.weight / myTeam.length : 0}
        />

        <AddCard onClick={redirect} />
      </Container>

      <Card.Title className={styles.titleHome}>Your team</Card.Title>
      <Row className={styles.rowSuperHeroes}>
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
