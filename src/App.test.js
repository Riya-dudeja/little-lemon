import { render, screen } from '@testing-library/react';
import App from "./App";
import Main from "./components/Main.js";
import BookingPage from './components/BookingPage.js';
import { BrowserRouter as Router } from "react-router-dom";

  test("Renders the BookingForm heading", () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    const headingElement = screen.getByText("Book your desired table");
    expect(headingElement).toBeInTheDocument();
  });
  test("Check homepage for Render", () => {
    render(
      <Router>
        <Main />
      </Router>
    );
    const headingElement = screen.getByText("Little Lemon");
    expect(headingElement).toBeInTheDocument();
  });

  test("check form inputs", () => {
    render(
      <Router>
        <BookingPage />
      </Router>
    );
    const submit = screen.getByTestId("submit");
    expect(submit).toBeInTheDocument();
    const occasion = screen.getByLabelText("Occasion");
    expect(occasion).toBeInTheDocument();
    const guests = screen.getByTestId("guests");
    expect(guests).toBeInTheDocument();
    const time = screen.getByTestId("time");
    expect(time).toBeInTheDocument();
  });