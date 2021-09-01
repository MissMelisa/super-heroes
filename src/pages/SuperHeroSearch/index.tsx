import { useFormik } from "formik";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useQuery } from "react-query";
import { searchSuperHeroes } from "../../api/superHeroes";
import SuperHeroSearched from "../../components/SuperHeroSearched";
import TextField from "../../components/TextField";
import { MyTeam } from "../../types";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { useSuperHero } from "../../components/SuperHeroContext";

export default function SuperHeroSearch() {
  const [valueSearched, setValueSearched] = useState<string>("");
  const { addNewHero } = useSuperHero();

  const history = useHistory();

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
  } = useQuery<MyTeam[], Error>(["repoHeroes", valueSearched], () => {
    return searchSuperHeroes(valueSearched);
  });
  if (isLoading) return <span>"Loading..."</span>;

  if (error) return <span>An error has occurred: {error}</span>;

  function handleOnAddHeroClick(item: MyTeam) {
    redirect();
    addNewHero(item);
  }
  function redirect() {
    history.push("/");
  }
  return (
    <Container className={styles.containerSearchHeroPage}>
      <h1>Super Heroes</h1>
      <Button onClick={redirect}>Volver atras</Button>
      <Form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <TextField
          controlId="value"
          label="Busca el tuyo"
          onChange={formik.handleChange}
          placeholder="Heroe..."
          type="text"
          value={formik.values.value}
        />
        <Button type="submit" variant="info" className={styles.buttonSearch}>
          Buscar
        </Button>
      </Form>

      <Row className={styles.rowSuperHeroes}>
        {data.map((item) => (
          <SuperHeroSearched
            id={item.id}
            image={item.image}
            name={item.name}
            onClick={() => handleOnAddHeroClick(item)}
          />
        ))}
      </Row>
    </Container>
  );
}
