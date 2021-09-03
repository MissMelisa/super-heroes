import { Button, Image, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";

type Props = {
  signOut: () => void;
};
export default function NavBar({ signOut }: Props) {
  return (
    <Navbar
      className={styles.navBarContainer}
      expand="lg"
      variant="light"
      bg="light"
    >
      <Image src="images/alkemyLogo.jpeg" className={styles.imageAlkemy} />
      <Button onClick={signOut} className={styles.signOut} variant="info">
        <Image src="images/logOut.png" className={styles.imageSignOut} />
        Sign out
      </Button>
    </Navbar>
  );
}
