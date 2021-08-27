import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Container, Button, Form, Image, Alert } from "react-bootstrap";
import TextField from "../../components/TextField";
import styles from "./styles.module.css";

type Credential = {
  email: string;
  password: string;
};

function Login() {
  const [authError, setAuthError] = useState<string>("");

  const validate = (values: Credential) => {
    const errors: Partial<Credential> = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  const formik = useFormik<Credential>({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios({
        method: "post",
        url: process.env.REACT_APP_AUTH_URL,
        data: values,
      })
        .then(function (response) {
          localStorage.setItem("token", response.data.token);
        })
        .catch(function (error) {
          console.log(error);
          setAuthError(error.message);
        });
    },
  });

  useEffect(() => {
    if (authError) {
      const interval = setInterval(() => {
        setAuthError("");
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [authError]);

  return (
    <Container fluid="md" className={styles.containerLogin}>
      <Image
        alt="Alkemy"
        fluid
        className={styles.imageLogin}
        src="images/alkemy.jpeg"
      />
      <h2 className={styles.loginTitle}>Login</h2>

      <Form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.email}
          controlId="email"
          type="email"
          label="Email"
          placeholder="email"
          error={formik.errors.email}
        />
        <TextField
          type="password"
          label="Password"
          controlId="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />

        <Button type="submit" variant="info" className={styles.buttonLogin}>
          Enviar
        </Button>
      </Form>
      {authError && (
        <Alert
          className={styles.alertContainer}
          variant="danger"
          onClose={() => setAuthError("")}
          dismissible
        >
          <Alert.Heading>Oh! You got an error!</Alert.Heading>
          <p className={styles.alertStory}>{authError}</p>
        </Alert>
      )}
    </Container>
  );
}
export default Login;
