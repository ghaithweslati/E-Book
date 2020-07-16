import React, { useState } from "react";
import Login from "./components/Login/Login";
import Inscription from "./components/Inscription/Inscription";
import BooksList from "./components/BooksList/BooksList";
import MembersList from "./components/MembersList/MembersList";
import BorrowedsList from "./components/BorrowedsList/BorrowedsList";
import MemberDetail from "./components/MemberDetail/MemberDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  fetchMembers,
  fetchMyBorrowed,
  fetchMyCurrentBorrowed,
  fetchMemberById,
} from "./services/members.service";
import "./App.css";
import { fetchBooks } from "./services/books.service";

function App() {
  var bor = [];
  const [books, setBooks] = useState([]);
  var current = { id: 0, type: "admin" };
  if (localStorage.getItem("current"))
    current = JSON.parse(localStorage.getItem("current"));
  if (current) bor = fetchMyCurrentBorrowed(current.id);
  const [borrowed, setBorowed] = useState(bor);

  const getBook = (isbn, image, categorie, titre, etat, nbExemp, auteur) => {
    var d = new Date();
    var dateEmp = d; /*("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);*/
    setBorowed((previousBooks) => [
      { isbn, image, categorie, titre, etat, dateEmp, nbExemp, auteur },
      ...previousBooks,
    ]);
    fetchMyBorrowed(current.id).unshift({
      isbn,
      image,
      categorie,
      titre,
      etat,
      dateEmp,
      nbExemp,
      auteur,
    });
    localStorage.setItem("members", JSON.stringify(fetchMembers()));
  };

  const renderBook = (bookToReturn) => {
    if(window.confirm('Do you really want to return this book'))
    {
      bookToReturn.dateRet=new Date();
      const borroweds = borrowed.filter((bor) => bor.isbn != bookToReturn.isbn);
      setBorowed(borroweds);
    // fetchMemberById(current.id).livres = borroweds;
      localStorage.setItem("members", JSON.stringify(fetchMembers()));
    }
  };

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

  return (
    <div className="App">
      {window.location.pathname.substring(1) != "login" &&
        window.location.pathname.substring(1) != "inscription" && (
          <div>
            <header>
              <img
                src={require("./logo.png")}
                alt="logo"
                className="brand-logo"
              />
              <aside>
                {borrowed.map((step, index) => (
                  <img
                    src={require("./components/Book/Cover/" + step.image)}
                    alt="logo"
                    className="brand-logo"
                    onClick={(e) => renderBook(step)}
                  />
                ))}
              </aside>
            </header>
            <div id="navbar">
              <ul>
                <li>
                  <a href="/books">Books</a>{" "}
                </li>
                <li>
                  {current.type === "Admin" && <a href="/members">Members</a>}
                </li>
                <li>
                  {current.type === "Admin" && (
                    <a href="/borroweds">Borroweds</a>
                  )}
                </li>
              </ul>
              <nav>
                <h1>
                  <b>All {window.location.pathname.substring(1)}</b>
                </h1>
                <div>
                  <a href="./login">Home {">"}</a>
                  <a> Books</a>
                </div>
              </nav>
            </div>
          </div>
        )}
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/inscription">
            <Inscription></Inscription>
          </Route>

          <Route exact path="/books">
            <BooksList
              borrowed={borrowed.length}
              getBook={getBook}
              addBook={addBook}
              add={true}
            ></BooksList>
          </Route>
          <Route exact path="/members/:memberId">
            <MemberDetail></MemberDetail>
          </Route>
          <Route exact path="/members">
            <MembersList tab={fetchMembers()}></MembersList>
          </Route>
          <Route exact path="/borroweds">
            <BorrowedsList tab={fetchMembers()}></BorrowedsList>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
