import React from "react";
import { render, act } from "@testing-library/react";
import BooksList from "../components/BooksList/BooksList";
// import { mockBooks } from "../mock/mockBooks";

describe("testing books list", () => {
  const mockBorrowed = 1;

  test("should render an array of books list", async () => {
    const promise = Promise.resolve();
    const mockGetBook = jest.fn(() => promise);
    const BooksListComponent = render(
      <BooksList borrowed={mockBorrowed} getBook={mockGetBook} />
    );
    await act(() => promise);
    expect(BooksListComponent).toMatchSnapshot();
  });
});
