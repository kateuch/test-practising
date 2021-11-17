import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greeting component", () => {
  test("renders Greetings", () => {
    //Arrange
    render(<Greetings />);
    //Act
    //...nothing

    //Assert
    const buttonElement = screen.getByText("Show greetings");
    const element = screen.queryByText("Hello World!"); //'!' missed, but with exact: false it is ok
    expect(element).not.toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("button click - show/hide the greetings", () => {
    //Arrange
    render(<Greetings />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    if (buttonElement.innerText === "Show greetings") {
      const buttonText = screen.queryByText("Hide greetings", { exact: false });
      const element = screen.queryByText("Hello World!"); //'!' missed, but with exact: false it is ok
      expect(element).toBeInTheDocument();
      expect(buttonText).toBeInTheDocument();
    }
    if (buttonElement.innerText === "Hide greetings") {
      const buttonText = screen.queryByText("Show greetings", { exact: false });
      const element = screen.queryByText("Hello World!"); //'!' missed, but with exact: false it is ok
      expect(element).not.toBeInTheDocument();
      expect(buttonText).toBeInTheDocument();
    }
  });
});
