import React, { useState, useRef, memo } from "react";
import "./BookForm.css";

function BookForm({ addBook, maxnbExempValue }) {
  const [image, setImage] = useState("");
  const [categorie, setCategorie] = useState("");
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [nbExemp, setNbExemp] = useState("");

  const handleAddBook = () => {
    addBook(image, categorie, titre, nbExemp, auteur, image);
    setTitre("");
    setImage("");
    setAuteur("");
    setCategorie("");
    setNbExemp("");
    setImage("");
  };

  return (
    <div className="book-form">
      <input
        aria-label="image"
        type="file"
        name="image"
        placeholder="Image"
        onChange={(e) => setImage(e.target.files[0].name)}
      />
      <br></br>
      <input
        aria-label="categorie"
        type="text"
        value={categorie}
        name="categorie"
        placeholder="Catégorie"
        onChange={(e) => setCategorie(e.target.value)}
      />
      <input
        aria-label="titre"
        type="text"
        value={titre}
        name="titre"
        placeholder="Titre"
        onChange={(e) => setTitre(e.target.value)}
      />
      <input
        aria-label="auteur"
        type="text"
        value={auteur}
        name="auteur"
        placeholder="Auteur"
        onChange={(e) => setAuteur(e.target.value)}
      />
      <input
        aria-label="nbExemp"
        type="text"
        value={nbExemp}
        name="nbExemp"
        placeholder="Nb exemplaires"
        onChange={(e) => setNbExemp(e.target.value)}
      />
      {nbExemp > maxnbExempValue && (
        <div data-testid="error-nbExemp">
          The duration must be less then {maxnbExempValue}
        </div>
      )}
      <button data-testid="addBook" className="button" onClick={handleAddBook}>
        Add a book
      </button>
    </div>
  );
}

BookForm.defaultProps = {
  maxnbExempValue: 100,
};

export default BookForm;
