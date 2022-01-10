import { screen } from "@testing-library/react";
import { renderWithClient } from "../../testUtils";
import GetUser from "./GetUser";

it("fetches the user and displayes their name", async () => {
  renderWithClient(<GetUser />);
  expect(await screen.findByText("Chelsey Dietrich")).toBeInTheDocument();
});
