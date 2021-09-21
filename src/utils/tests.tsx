import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter as Router } from "react-router-dom";
// test-utils.jsx

import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { superHeroesReducer } from "../redux/slices/superHeroesSlice";

const queryClient = new QueryClient();

function render(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: { superHeroes: superHeroesReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {} as any
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>{children}</Router>
        </QueryClientProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
