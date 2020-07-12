import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookForm from "../components/BookForm/BookForm";
import userEvent from "@testing-library/user-event";

describe("testing Add book", () => {
  test("should work without crashing", () => {
    const mockAddbook = jest.fn();
    const { debug } = render(<BookForm addBook={mockAddbook} />);
    // debug();
  });

  test("should book contains image, categorie, titre, auteur, nbExemp and a button", () => {
    const mockAddbook = jest.fn();
    const { debug, getByLabelText, getByTestId, getByText } = render(
      <BookForm addBook={mockAddbook} />
    );

    const inputImage = getByLabelText(/image/i);
    expect(inputImage).toBeTruthy();
    expect(inputImage).toHaveAttribute("type", "file");

    const inputCategorie = getByLabelText(/categorie/i);
    expect(inputCategorie).toBeTruthy();
    expect(inputCategorie).toHaveAttribute("type", "text");

    const inputTitre = getByLabelText(/titre/i);
    expect(inputTitre).toBeTruthy();
    expect(inputTitre).toHaveAttribute("type", "text");

    const inputAuteur = getByLabelText(/auteur/i);
    expect(inputAuteur).toBeTruthy();
    expect(inputAuteur).toHaveAttribute("type", "text");

    const inputNbExemp = getByLabelText(/nbExemp/i);
    expect(inputNbExemp).toBeTruthy();
    expect(inputNbExemp).toHaveAttribute("type", "text");

    expect(getByTestId("addBook")).toBeTruthy();
  });

  test("should fire event", () => {
    const mockAddbook = jest.fn();
    const { debug, getByLabelText, getByTestId } = render(
      <BookForm addBook={mockAddbook} />
    );

    // test de l'event onChange du champ categorie
    const inputCategorie = getByLabelText(/categorie/i);
    const categorieValue = "Life Style";

    userEvent.type(inputCategorie, categorieValue);
    // fireEvent.change(inputCategorie, { target: { value: categorieValue } });
    expect(inputCategorie).toHaveValue(categorieValue);

    // test de l'event onChange du champ titre
    const inputTitre = getByLabelText(/titre/i);
    const titreValue = "Hello";
    fireEvent.change(inputTitre, { target: { value: titreValue } });
    expect(inputTitre).toHaveValue(titreValue);

    // debug();

    const submitButton = getByTestId("addBook");
    userEvent.click(submitButton);
    // fireEvent.click(submitButton);
    expect(mockAddbook).toHaveBeenCalled();
    expect(mockAddbook).toHaveBeenCalledTimes(1);
  });

  test("should display an error", () => {
    const mockAddbook = jest.fn();
    const { debug, getByLabelText, getByTestId, container } = render(
      <BookForm addBook={mockAddbook} />
    );

    const inputNbExemp = getByLabelText(/nbExemp/i);
    const nbExempValue = "103";

    userEvent.type(inputNbExemp, nbExempValue);

    expect(getByTestId("error-nbExemp")).toBeTruthy();
    // debug(container);
  });

  test("should not display an error", () => {
    const mockAddbook = jest.fn();
    const { debug, getByLabelText, queryByTestId } = render(
      <BookForm addBook={mockAddbook} />
    );

    const inputNbExemp = getByLabelText(/nbExemp/i);
    const nbExempValue = "98";

    userEvent.type(inputNbExemp, nbExempValue);

    expect(queryByTestId("error-nbExemp")).toBeNull();
  });
});
