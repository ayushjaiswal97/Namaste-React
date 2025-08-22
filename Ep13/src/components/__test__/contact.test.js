import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page test cases", () => {
    it("Should load contact us component", () => {
    render(<Contact />);

    // Select the main heading (h1)
    const mainHeading = screen.getByRole("heading", { level: 1, name: /contact us/i });
    expect(mainHeading).toBeInTheDocument();

    // Optionally, also check for the subheading (h2)
    const subHeading = screen.getByRole("heading", { level: 2, name: /feel free to contact us/i });
    expect(subHeading).toBeInTheDocument();
    });

    // Button
    it("Should load button inside Contact component", () => {
    render(<Contact />);

    // Get button by role and text
    const button = screen.getByRole("button", { name: /send message/i });

    // Assertion
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Send Message");
    });

    //Input
    it("should render all input fields with correct placeholders", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);

    // Assertion
    expect(inputBoxes.length).toBe(3);
    });
});
