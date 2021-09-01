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
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.titleModal}>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className={styles.subTitleModal}>
          Nombre completo:<p className={styles.subTitle}>{fullName}</p>
        </p>
        <p className={styles.subTitleModal}>
          Alias:<p className={styles.subTitle}>{aliases}</p>
        </p>
        <p className={styles.subTitleModal}>
          Eye's color:<p className={styles.subTitle}>{eyeColor}</p>
        </p>
        <p className={styles.subTitleModal}>
          Hair's color:<p className={styles.subTitle}>{hairColor}</p>
        </p>
        <p className={styles.subTitleModal}>
          Weight:<p className={styles.subTitle}>{weight}</p>
        </p>
        <p className={styles.subTitleModal}>
          Height:<p className={styles.subTitle}>{height}</p>
        </p>
        <p className={styles.subTitleModal}>
          Job:<p className={styles.subTitle}>{work}</p>
        </p>
      </Modal.Body>
    </Modal>
  );
}
