import { Form } from "react-bootstrap";
import "./styles.css";

type Props = {
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  type: string;
  label: string;
  placeholder: string;
  controlId: string;
};
export default function TextField({
  onChange,
  value,
  label,
  type,
  placeholder,
  controlId,
}: Props) {
  return (
    <Form.Group className="textFieldContainer" controlId={controlId}>
      <Form.Label className="textFieldLabel">{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="textField"
      />
      <Form.Text />
    </Form.Group>
  );
}
