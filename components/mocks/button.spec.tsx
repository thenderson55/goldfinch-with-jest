import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "./button";

describe("button component", () => {
  it('renders "Hello World"', () => {
    const onMoney = jest.fn();
    render(<Button onMoney={onMoney} />);

    const button = screen.getByRole("button", {
      name: /Give me 33 dollars/,
    });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onMoney).toHaveBeenCalledTimes(1);
    expect(onMoney).toHaveBeenCalledWith(33);
  });
});
