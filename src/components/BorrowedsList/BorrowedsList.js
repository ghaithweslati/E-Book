
import Book from '../Book/Book';
import '../BooksList/BooksList.css';
import React, { useState, useCallback, useEffect } from "react"
import {fetchBorroweds,fetchBorrowedsRetard, fetchCurrentBorroweds } from "../../services/members.service"


function BorrowedsList() {
  const [borroweds, setborroweds] = useState(fetchBorroweds());
 
 
  const handleChange = (event) => {
      const type=event.target.value;
      if(type==1)
        setborroweds(fetchBorroweds())
      else if(type==2)
        setborroweds(fetchCurrentBorroweds())
      else
        setborroweds(fetchBorrowedsRetard())
      
  }


  return (
      <div className="listLivre">
        <h3>List of Borroweds</h3>
        <select  onChange={handleChange}>
          <option value={1}>All</option>
          <option value={2}>Current</option>
          <option value={3}>Retard</option>
        </select>
        <hr/>
        <section> 
        {   
                borroweds.map((step2 ,index) => (
                    <Book  key={index} isbn={step2.isbn} image={step2.image} categorie={step2.categorie}upda titre={step2.titre}  etat={step2.etat} dateEmp={step2.dateEmp} dateRet={step2.dateRet} nbExemp={step2.nbExemp} auteur={step2.auteur}  >
                                {step2.description} 
                    </Book>
                ))
       }
          </section>
      </div>
  );
}

export default BorrowedsList;