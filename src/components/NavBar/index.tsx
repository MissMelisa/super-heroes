import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { TeamSummary } from "../../types";
import styles from "./styles.module.css";

type Props = {
  signOut: () => void;
} & TeamSummary;

export default function NavBar({
  combat,
  intelligence,
  power,
  speed,
  strength,
  durability,
  height,
  weight,
  signOut,
}: Props) {
  return (
    <Navbar bg="light" variant="light" expand="lg" collapseOnSelect={true}>
      <Container className={styles.navContainer}>
        <Nav className={styles.titleNav}>Total: </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className={styles.navContainer}>
          <Navbar.Text className={styles.titleNav}>Combat:{combat}</Navbar.Text>
          <Navbar.Text className={styles.titleNav}>
            Intelligent:{intelligence}
          </Navbar.Text>
          <Navbar.Text className={styles.titleNav}>Power:{power}</Navbar.Text>
          <Navbar.Text className={styles.titleNav}>Speed:{speed}</Navbar.Text>
          <Navbar.Text className={styles.titleNav}>
            Strength:{strength}
          </Navbar.Text>
          <Navbar.Text className={styles.titleNav}>
            Durability:{durability}
          </Navbar.Text>
          <Navbar.Text className={styles.titleNav}>
            Weight:{weight}kg
          </Navbar.Text>
          <Navbar.Text className={styles.titleNav}>
            Height:{height}cm
          </Navbar.Text>
          <Nav.Link onClick={signOut} className={styles.signOut}>
            <Image src="images/logOut.png" className={styles.imageSignOut} />
            Sign out
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
