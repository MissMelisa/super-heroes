import "bootstrap/dist/css/bootstrap.min.css";

import { QueryClient, QueryClientProvider } from "react-query";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import SuperHeroProvider from "./components/SuperHeroContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SuperHeroSearch from "./pages/SuperHeroSearch";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <QueryClientProvider client={queryClient}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <SuperHeroProvider>
                  <PrivateRoute path="/" exact>
                    <Home />
                  </PrivateRoute>
                  <PrivateRoute path="/search-hero" exact>
                    <SuperHeroSearch />
                  </PrivateRoute>
                </SuperHeroProvider>
              </Switch>
            </AuthProvider>
          </Router>
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
