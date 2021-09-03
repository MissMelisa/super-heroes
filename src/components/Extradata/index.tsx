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
          Nombre completo:<li className={styles.subTitle}>{fullName}</li>
        </ul>
        <ul className={styles.titleModal}>
          Alias:<li className={styles.subTitle}>{aliases}</li>
        </ul>
        <ul className={styles.titleModal}>
          Eye's color:<li className={styles.subTitle}>{eyeColor}</li>
        </ul>
        <ul className={styles.titleModal}>
          Hair's color:<li className={styles.subTitle}>{hairColor}</li>
        </ul>
        <ul className={styles.titleModal}>
          Weight:<li className={styles.subTitle}>{weight}kg</li>
        </ul>
        <ul className={styles.titleModal}>
          Height:<li className={styles.subTitle}>{height}cm</li>
        </ul>
        <ul className={styles.titleModal}>
          Job:<li className={styles.subTitle}>{work}</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}
