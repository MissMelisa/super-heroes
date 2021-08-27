import axios from "axios";
import { useFormik } from "formik";
import { Container, Button, Form, Image } from "react-bootstrap";
import TextField from "../../components/TextField";
import "./styles.css";

type Credential = {
  email: string;
  password: string;
};

function Login() {
  const validate = (values: Credential) => {
    const errors: Partial<Credential> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
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
        });
    },
  });

  return (
    <Container fluid="md">
      <Image
        alt="Alkemy"
        fluid
        className="imageLogin"
        src="https://media-exp1.licdn.com/dms/image/C4E1BAQEDDjuh9HQchg/company-background_10000/0/1610631110628?e=2159024400&v=beta&t=00JMFny1Y6JiSd8rpPDIfJ_6vNH6NhtCK_yban1zy3c"
      />
      <h2 className="loginTitle">Login</h2>
      <Form onSubmit={formik.handleSubmit} className="formContainer">
        <TextField
          onChange={formik.handleChange}
          value={formik.values.email}
          controlId="email"
          type="email"
          label="Email"
          placeholder="email"
        />
        <TextField
          type="password"
          label="Password"
          controlId="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button type="submit" variant="info" className="buttonLogin">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
export default Login;
