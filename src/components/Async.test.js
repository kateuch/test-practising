import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({  //allows to set a value this fetch
        json: async () => [{id: 'p1', title: 'Firest post'}],
    })
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem"); // f'ind' returns a Promise
    expect(listItemElements).not.toHaveLength(0);
  });
});
