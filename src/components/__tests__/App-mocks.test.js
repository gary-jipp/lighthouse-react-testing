import {screen, render, cleanup, fireEvent, prettyDOM} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "App";
const {getNewFriends} = require("helpers");
jest.mock('helpers');

const data = [
  {name: "Betty White", uid: "1"},
  {name: "Freddy Mercury", uid: "2"},
  {name: "James Holden", uid: "3"},
  {name: "Tom Cruise", uid: "4"},
];

afterEach(cleanup);

describe('App Tests with Fixture Data', () => {

  it("can load fixture data from API", async () => {
    getNewFriends.mockResolvedValueOnce(data);

    render(<App />);

    const button = screen.getByText("Get New Friends");
    fireEvent.click(button);

    // console.log(prettyDOM(container));

    // const listItems = screen.getAllByRole("listitem");  // This won't work because "find" is Async

    // Add async and await
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toEqual(4);

    const list = screen.getByRole("list");  // this is the <ul> element
    // console.log(prettyDOM(list));
  });

});
