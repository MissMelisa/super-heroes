import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../AuthContext";

type Props = {
  children: React.ReactNode;
} & RouteProps;

export default function PrivateRoute({ children, ...rest }: Props) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
