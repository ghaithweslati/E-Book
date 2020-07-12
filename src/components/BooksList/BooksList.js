import Book from "../Book/Book";
import "./BooksList.css";
import BookForm from "../BookForm/BookForm";
import React, { useState, useCallback, useEffect } from "react";
import { fetchBooks, searchBooks } from "../../services/books.service";

function BooksList(props) {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [add, setAdd] = useState(true);

  var current = { id: 0, type: "Admin" };
  if (localStorage.getItem("current"))
    current = JSON.parse(localStorage.getItem("current"));

  const addBook = (image, categorie, titre, nbExemp, auteur) => {
    setBooks((previousBooks) => [
      {
        isbn: books.length + 1,
        image,
        categorie,
        titre,
        etat: "Disponible",
        nbExemp,
        auteur,
      },
      ...previousBooks,
    ]);
    fetchBooks().unshift({
      isbn: fetchBooks().length + 1,
      image,
      categorie,
      titre,
      etat: "Disponible",
      nbExemp,
      auteur,
    });
    localStorage.setItem("books", JSON.stringify(fetchBooks()));
  };

  const memoizedCallback = useCallback(addBook, []);

  const updateBook = (isbn, image, categorie, titre, etat, nbExemp, auteur) => {
    const newBooks = books.map((book) =>
      book.isbn === isbn
        ? { isbn, image, categorie, titre, etat, nbExemp, auteur }
        : book
    );
    setBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!searchValue) {
        let result = await fetchBooks();
        setBooks(result);
      } else {
        const result = await searchBooks(searchValue);
        setBooks(result);
      }
    };
    fetchData();
  }, [searchValue]);

  return (
    <div className="listLivre">
      <header>
        <h1>List of Books</h1>
        {current.type === "Admin" && <h1 onClick={(e) => setAdd(!add)}>+</h1>}
        {
          <nav>
            {add ? (
              <input
                type="text"
                placeholder="Search By Title, Author..."
                name="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            ) : (
              <BookForm addBook={memoizedCallback} maxnbExempValue={100} />
            )}
          </nav>
        }
      </header>
      <hr />
      <section>
        {books.map((step, index) => (
          <Book
            key={index}
            isbn={step.isbn}
            image={step.image}
            categorie={step.categorie}
            titre={step.titre}
            etat={step.etat}
            nbExemp={step.nbExemp}
            auteur={step.auteur}
            updateBook={updateBook}
            getBook={props.getBook}
            borrowed={props.borrowed}
          >
            {step.description}
          </Book>
        ))}
      </section>
    </div>
  );
}

export default BooksList;
