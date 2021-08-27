import axios from "axios";
import { Credentials } from "../types";

export function login(values: Credentials) {
  return axios({
    method: "post",
    url: process.env.REACT_APP_AUTH_URL,
    data: values,
  });
}
