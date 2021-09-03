import { Alert } from "react-bootstrap";
import styles from "./styles.module.css";

type Props = {
  onClose: () => void;
  errorMessage: string;
};
export default function ErrorMessage({ onClose, errorMessage }: Props) {
  return (
    <Alert
      variant="danger"
      onClose={onClose}
      dismissible
      className={styles.alertContainer}
    >
      <Alert.Heading>Oh! You got an error</Alert.Heading>
      <p className={styles.alertStory}>{errorMessage}</p>
    </Alert>
  );
}
