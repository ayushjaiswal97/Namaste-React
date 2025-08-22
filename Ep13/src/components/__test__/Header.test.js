import { render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with a login Button", () => {
    render(
        <BrowserRouter>
         <Provider store={appStore}>
          <Header/>
         </Provider>
        </BrowserRouter>
    );
     const logginButton = screen.getByRole("button", {name: "login"});
    // const logginButton = screen.getByRole("button");
    // const logginButton = screen.getByText("login");
    expect(logginButton).toBeInTheDocument();
});

it("Should load Header component with cart items", () => {
    render(
        <BrowserRouter>
         <Provider store={appStore}>
          <Header/>
         </Provider>
        </BrowserRouter>
     );
    const cartItems = screen.getByText(/🛒/); // Using regex to match cart icon
    expect(cartItems).toBeInTheDocument();
});
