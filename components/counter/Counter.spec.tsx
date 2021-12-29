import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Counter } from "./index";

describe("initialized with defaultCount=0 and increase/decrease count working", () => {
  beforeEach(() => {
    render(<Counter defaultCount={0} description="My Counter" />);
  });

  it("renders defaultCount=0 and title as My Counter", () => {
    const element = screen.getByText("Current Count: 0");
    const elementTwo = screen.getByText(/my Counter/i);
    expect(element).toBeInTheDocument();
    expect(elementTwo).toBeInTheDocument();
  });

  describe("when + is clicked", () => {
    beforeEach(() => {
      fireEvent.click(
        screen.getByRole("button", {
          name: "+",
        })
      );
    });

    it("click + then counter=1", () => {
      expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
    });
  });

  it("click - then counter=0", () => {
    const button = screen.getByRole("button", {
      name: "Decrement",
    });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
  });
});
