import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import * as AuthAPI from "../../api/auth";
import { Credentials } from "../../types";

type AuthContextType = {
  token: string;
  login: (values: Credentials) => Promise<void>;
};

const initialContext: AuthContextType = {
  token: "",
  login: async (values: Credentials) => {},
};

export const AuthContext = React.createContext(initialContext);

const accessTokenKey = "access_token";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState(
    localStorage.getItem(accessTokenKey) || ""
  );

  const history = useHistory();

  function login(values: Credentials) {
    return AuthAPI.login(values).then(function (response) {
      localStorage.setItem(accessTokenKey, response.data.token);
      setToken(response.data.token);
      history.push("/");
    });
  }

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
