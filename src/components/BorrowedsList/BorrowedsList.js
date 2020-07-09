
import Book from '../Book/Book';
import '../BooksList/BooksList.css';
import React, { useState, useCallback, useEffect } from "react"
import { fetchMembers,fetchBorrowedsRetard, fetchBorroweds,fetchMyBorrowed } from "../../services/members.service"


function BorrowedsList() {
  const [borroweds, setborroweds] = useState(fetchBorroweds());
 
 
  const handleChange = (event) => {
      const type=event.target.value;
      if(type==3)
        setborroweds(fetchBorrowedsRetard())
      else
        setborroweds(fetchBorroweds())
      
  }


  return (
      <div className="listLivre">
        <h3>List of Borroweds</h3>
        <select  onChange={handleChange}>
          <option value={1}>All</option>
          <option value={2}>Borrowed</option>
          <option value={3}>Retard</option>
        </select>
        <hr/>
        <section> 
        {   
                borroweds.map((step2 ,index) => (
                    <Book  key={index} isbn={step2.isbn} image={step2.image} categorie={step2.categorie}upda titre={step2.titre}  etat={step2.etat} dateEmp={step2.dateEmp} nbExemp={step2.nbExemp} auteur={step2.auteur}  >
                                {step2.description} 
                    </Book>
                ))
       }
          </section>
      </div>
  );
}

export default BorrowedsList;