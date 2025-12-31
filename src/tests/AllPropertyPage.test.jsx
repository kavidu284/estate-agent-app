import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import AllPropertyPage from "../pages/AllPropertyPage";

describe("AllPropertyPage", () => {

  test("renders All Properties heading", () => {
    render(
      <BrowserRouter>
        <AllPropertyPage
          addFavourite={() => {}}
          favourites={[]}
          removeFavourite={() => {}}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("All Properties")).toBeInTheDocument();
  });

  test("shows message when there are no favourites", () => {
    render(
      <BrowserRouter>
        <AllPropertyPage
          addFavourite={() => {}}
          favourites={[]}
          removeFavourite={() => {}}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/no favourite properties yet/i)
    ).toBeInTheDocument();
  });

});
