import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "react-router-dom";
// test-utils.jsx

import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { superHeroesReducer } from "../redux/slices/superHeroesSlice";
import { createMemoryHistory } from "history";

const queryClient = new QueryClient();

type WrapperProps = {
  children: React.ReactNode;
};

function render(
  ui: JSX.Element,

  {
    preloadedState,
    store = configureStore({
      reducer: { superHeroes: superHeroesReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {} as any,
  pushString = "/"
) {
  const history = createMemoryHistory();

  history.push(pushString);
  function Wrapper({ children }: WrapperProps) {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router history={history}>{children}</Router>
        </QueryClientProvider>
      </Provider>
    );
  }
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    history,
  };
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
