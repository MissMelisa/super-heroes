import { useFormik } from "formik";
import { Container, Button, Form, Image } from "react-bootstrap";
import TextField from "../../components/TextField";
import "./styles.css";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
          Login
        </Button>
      </Form>
    </Container>
  );
}
export default Login;
