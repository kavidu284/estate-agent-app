import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import SearchPage from "../pages/SearchPage";

describe("SearchPage", () => {

  test("renders Property Search heading", () => {
    render(
      <BrowserRouter>
        <SearchPage
          favourites={[]}
          addFavourite={() => {}}
          removeFavourite={() => {}}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/property search/i)
    ).toBeInTheDocument();
  });

  test("renders bedroom filter inputs", () => {
    render(
      <BrowserRouter>
        <SearchPage
          favourites={[]}
          addFavourite={() => {}}
          removeFavourite={() => {}}
        />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/min bedrooms/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/max bedrooms/i)).toBeInTheDocument();
  });

  test("renders postcode filter input", () => {
    render(
      <BrowserRouter>
        <SearchPage
          favourites={[]}
          addFavourite={() => {}}
          removeFavourite={() => {}}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText(/postcode/i)
    ).toBeInTheDocument();
  });

  test("renders property type dropdown", () => {
    render(
      <BrowserRouter>
        <SearchPage
          favourites={[]}
          addFavourite={() => {}}
          removeFavourite={() => {}}
        />
      </BrowserRouter>
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

});
