import { Modal } from "react-bootstrap";
import styles from "./styles.module.css";

type ExtraDataProps = {
  fullName: string;
  weight: string;
  height: string;
  work: string;
  name: string;
  eyeColor: string;
  aliases: string;
  hairColor: string;
  show: boolean;
  onHide: (setModalShow: boolean) => void;
};
export default function ExtraData({
  work,
  fullName,
  weight,
  height,
  eyeColor,
  hairColor,
  name,
  show,
  aliases,
  onHide,
}: ExtraDataProps) {
  return (
    <Modal show={show} onHide={onHide} bg="light">
      <Modal.Header closeButton>
        <Modal.Title className={styles.nameHero}>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className={styles.titleModal}>
          <li className={styles.subTitle}> Nombre completo:{fullName}</li>
          <li className={styles.subTitle}>Alias:{aliases}</li>
          <li className={styles.subTitle}> Eye's color:{eyeColor}</li>
          <li className={styles.subTitle}>Hair's color:{hairColor}</li>
          <li className={styles.subTitle}> Weight:{weight}kg</li>
          <li className={styles.subTitle}> Height:{height}cm</li>
          <li className={styles.subTitle}> Job:{work}</li>{" "}
        </ul>
      </Modal.Body>
    </Modal>
  );
}
