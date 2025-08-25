import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME)
    })
);

it("Should Load Restaurant Menu Components", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
            </Provider>
                </BrowserRouter>
        )
    );

    const accordionHeader = screen.getByText("CheeseNPaneer Extravaganza (11)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(11);

    expect(screen.getByText("🛒0")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "ADD+" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("🛒1")).toBeInTheDocument();
    
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("🛒2")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(13);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(11);

    expect(screen.getByText("Cart is Empty. Add Items to the cart!")).toBeInTheDocument();

});
