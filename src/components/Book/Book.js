import React, { useState } from "react";
import "./Book.css";
import { fetchMyBorrowed } from "../../services/members.service";

function Book(props) {
  const [etatToUpdate, setEtatToUpdate] = useState(props.etat);
  const [nbExempToUpdate, setNbExempToUpdate] = useState(props.nbExemp);

  const handleUpdateBook = () => {
    const current = JSON.parse(localStorage.getItem("current"));
    if (current.type == "Admin") {
      if (etatToUpdate == "Disponible") {
        setEtatToUpdate("Archivé");
        props.updateBook(
          props.isbn,
          props.image,
          props.categorie,
          props.titre,
          "Archivé",
          nbExempToUpdate,
          props.auteur
        );
      } else {
        props.updateBook(
          props.isbn,
          props.image,
          props.categorie,
          props.titre,
          "Disponible",
          nbExempToUpdate,
          props.auteur
        );
        setEtatToUpdate("Disponible");
      }
    }
  };

  const handleGetBook = () => {
    setEtatToUpdate("Borrowed");
    setNbExempToUpdate(nbExempToUpdate - 1);
    props.updateBook(
      props.isbn,
      props.image,
      props.categorie,
      props.titre,
      "Borrowed",
      nbExempToUpdate,
      props.auteur
    );
    props.getBook(
      props.isbn,
      props.image,
      props.categorie,
      props.titre,
      etatToUpdate,
      nbExempToUpdate,
      props.auteur
    );
  };

  return (
    <div className="book">
      <img src={require("./Cover/" + props.image)} alt={props.titre} />
      <span>{props.categorie}</span>
      <hr />
      <label onClick={handleUpdateBook} id={etatToUpdate}>
        {etatToUpdate}
      </label>
      <b data-testid="titre-book">{props.titre}</b>
      <b>{props.dateEmp}</b>
      <span>By {props.auteur}</span>
      <h5>{nbExempToUpdate} Copies</h5>
      {etatToUpdate != "Archivé" &&
        props.borrowed < 2 &&
        nbExempToUpdate > 0 && <p onClick={handleGetBook}>Emprunter</p>}
    </div>
  );
}

export default Book;
