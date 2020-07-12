import React from "react";
import { render, act } from "@testing-library/react";
import BooksList from "../components/BooksList/BooksList";
import userEvent from "@testing-library/user-event";
// import { mockBooks } from "../mock/mockBooks";

describe("testing books list", () => {
  const mockBorrowed = 1;

  test("should render an array of books list", async () => {
    const promise = Promise.resolve();
    const mockGetBook = jest.fn(() => promise);
    const mockAddBook = jest.fn();
    const BooksListComponent = render(
      <BooksList
        borrowed={mockBorrowed}
        getBook={mockGetBook}
        addBook={mockAddBook}
        add={true}
      />
    );
    await act(() => promise);
    expect(BooksListComponent).toMatchSnapshot();
  });

  // you have to modify the BooksList Component to get the addBook as props
  test("testing the integration of BooksList and BookForm", async () => {
    const promise = Promise.resolve();
    const mockGetBook = jest.fn(() => promise);
    const mockAddBook = jest.fn();
    const { debug, getByTestId } = render(
      <BooksList
        borrowed={mockBorrowed}
        getBook={mockGetBook}
        addBook={mockAddBook}
        add={false}
      />
    );

    await act(() => promise);
    // debug();
    const addBookButton = getByTestId("addBook");
    userEvent.click(addBookButton);
    expect(mockAddBook).toHaveBeenCalled();
    expect(mockAddBook).toHaveBeenCalledTimes(1);
  });
});
