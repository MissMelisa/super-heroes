import { useFormik } from "formik";
import { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { searchSuperHeroes } from "../../api/superHeroes";
import SuperHeroSearched from "../../components/SuperHeroSearched";
import TextField from "../../components/TextField";
import { SuperHero } from "../../types";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { useSuperHero } from "../../components/SuperHeroContext";
import ErrorMessage from "../../components/ErrorMessage";

export default function SuperHeroSearch() {
  const [valueSearched, setValueSearched] = useState<string>("");
  const [errorInYourTeam, setErrorInYourTeam] = useState<string>("");
  const { addNewHero, myTeam } = useSuperHero();

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
  } = useQuery<SuperHero[], Error>(["repoHeroes", valueSearched], () => {
    if (valueSearched.length >= 1) {
      return searchSuperHeroes(valueSearched);
    } else {
      return [];
    }
  });

  function handleOnAddHeroClick(item: SuperHero) {
    const teamHero = myTeam.find((i) => item.id === i.id);

    if (teamHero) {
      return setErrorInYourTeam("This hero is in your team");
    }

    if (myTeam.length === 6) {
      return setErrorInYourTeam("Your team is full");
    }

    const goodHeroes = myTeam.filter(
      (item) => item.alignment === "good"
    ).length;

    if (item.alignment === "good" && goodHeroes === 3) {
      return setErrorInYourTeam("You have 3 good heroes");
    }
    const badHeroes = myTeam.length - goodHeroes;

    if (item.alignment === "bad" && badHeroes === 3) {
      return setErrorInYourTeam("You have 3 bad heroes");
    }
    addNewHero(item);
    redirect();
  }

  function redirect() {
    history.push("/");
  }
  return (
    <Container className={styles.containerSearchHeroPage}>
      <h1>Super Heroes</h1>

      <Form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <TextField
          controlId="value"
          onChange={formik.handleChange}
          placeholder="Heroe..."
          type="text"
          value={formik.values.value}
        />
        <Button type="submit" variant="info" className={styles.buttonSearch}>
          Search
        </Button>
      </Form>
      {isLoading && <Spinner animation="border" />}
      {error && (
        <ErrorMessage
          onClose={() => setErrorInYourTeam("")}
          errorMessage={error.message}
        />
      )}

      <Row className={styles.rowSuperHeroes}>
        {data.map((item) => (
          <SuperHeroSearched
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            onClick={() => handleOnAddHeroClick(item)}
          />
        ))}
      </Row>
      {errorInYourTeam && (
        <ErrorMessage
          onClose={() => setErrorInYourTeam("")}
          errorMessage={errorInYourTeam}
        />
      )}
    </Container>
  );
}
