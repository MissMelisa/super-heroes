import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();
const wrapper = (component: React.ReactNode) => (
  <QueryClientProvider client={queryClient}>
    <Router>{component}</Router>
  </QueryClientProvider>
);

export const renderWithProviders = (component: React.ReactNode) =>
  render(wrapper(component));
