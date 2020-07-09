import React, { useState, useRef , memo} from "react"
import './BookForm.css';


function BookForm({ addBook }) {
const [image, setImage] = useState("");
const [categorie, setCategorie] = useState("");
const [titre, setTitre] = useState("");
const [auteur, setAuteur] = useState("");
const [nbExemp, setNbExemp] = useState("");

  const handleAddBook = () => {
    addBook(image, categorie,titre,nbExemp,auteur,image);
    setTitre("");
    setImage("");
    setAuteur("");
    setCategorie("");
    setNbExemp("");
    setImage("");
  }


  return (
    <div className="book-form">
      <input
        type="file"
        name="image"
        placeholder="Image"
        onChange={e => setImage(e.target.files[0].name)}
      /><br></br>
      <input
        type="text"
        value={categorie}
        name="categorie"
        placeholder="Catégorie"
        onChange={e => setCategorie(e.target.value)}
      />
      <input
        type="text"
        value={titre}
        name="titre"
        placeholder="Titre"
        onChange={e => setTitre(e.target.value)}
      />
      <input
        type="text"
        value={auteur}
        name="auteur"
        placeholder="Auteur"
        onChange={e => setAuteur(e.target.value)}
      />
      <input
        type="text"
        value={nbExemp}
        name="nbExemp"
        placeholder="Nb exemplaires"
        onChange={e => setNbExemp(e.target.value)}
      />
      <button className="button" onClick={handleAddBook}>
        Add a book
      </button>
    </div>
  );
}

export default BookForm;