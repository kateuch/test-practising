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

  test("button click - show the greetings", () => {
    //Arrange
    render(<Greetings />);
    //Act
    const buttonElement = screen.queryByText("Show greetings");
    userEvent.click(buttonElement);
    // Assert
    if (buttonElement) {

      const buttonText = screen.queryByText("Hide greetings", { exact: false });
      const element = screen.queryByText("Hello World!"); //'!' missed, but with exact: false it is ok
      expect(element).toBeInTheDocument();
      expect(buttonText).toBeInTheDocument();
    }
    });

  // test("button click - hide the greetings", () => {
  //   //Arrange
  //   render(<Greetings />);
  //   //Act
  //   const buttonElement = screen.queryByRole("button");
  //   userEvent.click(buttonElement);
  //   // Assert


  //     const buttonText = screen.queryByText("Show greetings", { exact: false });
  //     const element = screen.queryByText("Hello World!", {exact: true}); //'!' missed, but with exact: false it is ok
  //     expect(element).not.toBeInTheDocument();
  //     // expect(buttonText).toBeInTheDocument();

  // })
});
