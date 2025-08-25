import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// make an fake API call
global.fetch = jest.fn(() => {
   return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

    it("Should Search Res List for burger text input ", async () => {
    await act(async () => 
        render(
        <BrowserRouter>
         <Body />
        </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: { value: "pizza"}});
    fireEvent.click(searchBtn);

    const searchAfterClick = screen.getAllByTestId("resCard");
    expect(searchAfterClick.length).toBe(3);
    });

    it("Should Filtered Top Listed Restaurant", async () => {
        await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ));

        const cardsBeforeFilter = screen.getAllByTestId("resCard");
        expect(cardsBeforeFilter.length).toBe(20);

        const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
        fireEvent.click(topRatedBtn);

        const cardsAfterFilter = screen.getAllByTestId("resCard");
        expect(cardsAfterFilter.length).toBe(6);
    });

