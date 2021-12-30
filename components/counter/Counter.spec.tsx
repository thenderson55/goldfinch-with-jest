import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Counter } from "./index";
import user from "@testing-library/user-event";

describe("initialized with defaultCount=0 and increase/decrease count working", () => {
  beforeEach(() => {
    render(<Counter defaultCount={0} description="My Counter" />);
  });

  it('renders defaultCount=0 and title as "My Counter"', () => {
    const element = screen.getByText("Current Count: 0");
    const elementTwo = screen.getByText(/my Counter/i);
    expect(element).toBeInTheDocument();
    expect(elementTwo).toBeInTheDocument();
  });

  describe("when + is clicked", () => {
    beforeEach(async () => {
      fireEvent.click(
        screen.getByRole("button", {
          name: "+",
        })
      );
      await waitFor(() => {
        screen.getByText("Current Count: 1");
      });
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

  describe("when incrementor input is 5", () => {
    beforeEach(async () => {
      user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
      user.click(
        screen.getByRole("button", {
          name: "+",
        })
      );
      await waitFor(() => {
        screen.getByText("Current Count: 5");
      });
    });

    it("click + then counter=5", () => {
      expect(screen.getByText("Current Count: 5")).toBeInTheDocument();
    });
  });

  describe("when incrementor input is 50 anc click -", () => {
    beforeEach(() => {
      user.type(screen.getByLabelText(/Incrementor/), "{selectall}50");
      user.click(
        screen.getByRole("button", {
          name: "Decrement",
        })
      );
    });

    it("click + then counter=-50", () => {
      expect(screen.getByText("Current Count: -50")).toBeInTheDocument();
    });
  });
});
