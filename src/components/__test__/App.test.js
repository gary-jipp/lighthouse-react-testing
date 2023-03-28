import {screen, render, cleanup, fireEvent, prettyDOM} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "App";

afterEach(cleanup);


describe('List Tests', () => {

  it("renders with no data without crashing", () => {
    render(<App />);
  });

  it("can enter text into the input field", () => {
    render(<App />);

    // const input = screen.getByPlaceholderText("Enter Name");
    // const input = screen.getByTestId("name-input");
    const input = screen.getByRole("textbox"); //
    // console.log(prettyDOM(input));

    fireEvent.change(input, {target: {value: "Nathan Brown"}});
    // console.log(prettyDOM(input));

    expect(screen.getByDisplayValue("Nathan Brown")).toBeInTheDocument();  // Need Jest-dom
  });

  it("can add a friend", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    // console.log(prettyDOM(input));

    fireEvent.change(input, {target: {value: "Nathan Brown"}});
    // console.log(prettyDOM(input));
    expect(screen.getByDisplayValue("Nathan Brown")).toBeInTheDocument(); // Need Jest-dom

    // const button = screen.getByRole("button");    // Multiple found - error
    const buttons = screen.getAllByRole("button");    // Multiple found - list
    // console.log(buttons);               //  Button Array
    // console.log(prettyDOM(buttons[0]));               // First Button

    // Search for Button by its Tewxt
    const addItem = screen.getByText("Add Item");
    fireEvent.click(addItem);

    // console.log(prettyDOM(container));

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toEqual(1);
    expect(listItems[0]).toHaveTextContent("Nathan Brown");
  });


  it("can load friends from API", async () => {
    render(<App />);

    const button = screen.getByText("Get New Friends");
    fireEvent.click(button);

    // console.log(prettyDOM(container));

    // const listItems = screen.getAllByRole("listitem");  // This won't work because "find" is Async

    // Add async and await
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toEqual(5);

    const list = screen.getByRole("list");  // this is the <ul> element
    // console.log(prettyDOM(list));
  });

});
