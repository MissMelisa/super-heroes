import { useFormik } from "formik";
import { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useQuery } from "react-query";
import { searchSuperHeroes } from "../../api/superHeroes";
import SuperHeroSearched from "../../components/SuperHeroSearched";
import TextField from "../../components/TextField";
import { SuperHeroesType } from "../../types";
import Row from "react-bootstrap/Row";

import styles from "./styles.module.css";

export default function SuperHeroSearch() {
  const [valueSearched, setValueSearched] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      value: "",
    },
    onSubmit: (values) => {
      setValueSearched(values.value);
    },
  });

  const {
    isLoading,
    error,
    data = [],
  } = useQuery<SuperHeroesType[], Error>(["repoHeroes", valueSearched], () => {
    return searchSuperHeroes(valueSearched);
  });
  if (isLoading) return <span>"Loading..."</span>;

  if (error) return <span>An error has occurred: {error}</span>;

  return (
    <Container className={styles.containerSearchHeroPage}>
      <h1>Super Heroes</h1>
      <Form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <TextField
          controlId="value"
          label="Busca el tuyo"
          onChange={formik.handleChange}
          placeholder="Heroe..."
          type="text"
          value={formik.values.value}
        />
        <Button type="submit" variant="info">
          Enviar
        </Button>
      </Form>

      <Row className={styles.rowSuperHeroes}>
        {data.map((item) => (
          <SuperHeroSearched image={item.image.url} name={item.name} />
        ))}
      </Row>
    </Container>
  );
}
