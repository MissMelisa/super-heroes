import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AuthProvider, { AuthContext } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/login" exact>
                <Login />
              </Route>
              <PrivateRoute path="/" exact>
                <Home />
              </PrivateRoute>
            </Switch>
          </AuthProvider>
        </Router>
      </header>
    </div>
  );
}

export default App;
