import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Book from "../components/Book/Book";
import userEvent from "@testing-library/user-event";

describe("testing Book component", () => {
  const mockBook = {
    isbn: 0,
    image: "5.PNG",
    categorie: "Art & Photography",
    titre: "Help Me Find My Stomach",
    etat: "Disponible",
    nbExemp: 2,
    auteur: "Angela Gunning",
    description: " fdsffffffffffffffffff",
  };

  test("should work without crashing", () => {
    const mockUpdateBook = jest.fn();
    const mockGetBook = jest.fn();

    const { debug } = render(
      <Book
        key={0}
        isbn={mockBook.isbn}
        image={mockBook.image}
        categorie={mockBook.categorie}
        titre={mockBook.titre}
        etat={mockBook.etat}
        nbExemp={mockBook.nbExemp}
        auteur={mockBook.auteur}
        updateBook={mockUpdateBook}
        getBook={mockGetBook}
        description={mockBook.description}
      />
    );
    // debug();
  });

  test("should render a book data", () => {
    const mockUpdateBook = jest.fn();
    const mockGetBook = jest.fn();

    const { debug, getByLabelText, getByTestId, getByText } = render(
      <Book
        key={0}
        isbn={mockBook.isbn}
        image={mockBook.image}
        categorie={mockBook.categorie}
        titre={mockBook.titre}
        etat={mockBook.etat}
        nbExemp={mockBook.nbExemp}
        auteur={mockBook.auteur}
        updateBook={mockUpdateBook}
        getBook={mockGetBook}
        description={mockBook.description}
      />
    );

    const item = getByTestId("titre-book");
    expect(item).toHaveTextContent(mockBook.titre);
  });
});
