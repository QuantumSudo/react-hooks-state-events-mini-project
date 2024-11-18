import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";  // Ensure App component is tested, not just CategoryFilter
import { CATEGORIES, TASKS } from "../data";

test("displays a button for each category", () => {
  render(<App />);
  
  // Check if a button exists for each category
  for (const category of CATEGORIES) {
    const button = screen.queryByRole("button", { name: category });
    expect(button).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<App />);
  
  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });

  // Ensure that both buttons are in the DOM before firing the click event
  expect(codeButton).toBeInTheDocument();
  expect(allButton).toBeInTheDocument();

  // Simulate a click event on the "Code" button
  fireEvent.click(codeButton);

  // Check that the "Code" button has the "selected" class, and "All" does not
  expect(codeButton).toHaveClass("selected");
  expect(allButton).not.toHaveClass("selected");
});

test("clicking the category button filters the task list", () => {
  render(<App />);
  
  const codeButton = screen.queryByRole("button", { name: "Code" });

  // Ensure the "Code" button is in the DOM
  expect(codeButton).toBeInTheDocument();

  // Simulate a click on "Code"
  fireEvent.click(codeButton);

  // Check if tasks that belong to the "Code" category are visible
  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  // Check if tasks that do not belong to the "Code" category are not visible
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<App />);
  
  const allButton = screen.queryByRole("button", { name: "All" });

  // Ensure the "All" button is in the DOM
  expect(allButton).toBeInTheDocument();

  // Simulate a click on "All"
  fireEvent.click(allButton);

  // Check if all tasks are visible when "All" is clicked
  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
});
