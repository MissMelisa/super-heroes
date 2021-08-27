import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

type Props = {
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  type: string;
  label: string;
  placeholder: string;
  controlId: string;
  error?: string;
};
export default function TextField({
  onChange,
  value,
  label,
  type,
  placeholder,
  controlId,
  error,
}: Props) {
  return (
    <Form.Group className={styles.textFieldContainer} controlId={controlId}>
      <Form.Label className={styles.textFieldLabel}>{label}</Form.Label>
      <Form.Control
        isInvalid={!!error}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="textField"
      />

      <Form.Control.Feedback type="invalid" className={styles.errorMessage}>
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
