import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, act } from "@testing-library/react-hooks";
import ItemsList from "./index";
import { useItemsData } from "../../hooks/useItemsData";

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

// eslint-disable-next-line jest/no-disabled-tests
it.skip('renders "ItemsList"', async () => {
  render(<ItemsList />);
  const { result, waitFor } = renderHook(() => useItemsData(10, 1), {
    wrapper,
  });

  const element = await screen.findByText(/loading/);
  expect(element).toBeInTheDocument();
});
