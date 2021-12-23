/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("header");
    expect(heading).toBeInTheDocument();
  });
  it("should render the heading", () => {
    const textToFind = "Hello World!";

    render(<Home />);
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});
