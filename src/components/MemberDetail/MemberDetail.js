import './MemberDetail.css';
import Book from '../Book/Book';
import React, { useEffect, useState } from "react"
import { fetchMemberById, fetchMembers } from "../../services/members.service"
import { useParams, useLocation, useRouteMatch } from "react-router-dom"


function MemberDetail() {

  const { memberId } = useParams()
  var member =  fetchMemberById(memberId);
  const [etat, setEtatValue] = useState(member.etat);
  

  const changeStatus = () => {
   if(etat=="Actif")
   {
    setEtatValue("Banned")
    fetchMemberById(memberId).etat="Banned";
   }
   else
   {
    setEtatValue("Actif")
    fetchMemberById(memberId).etat="Actif";
   }
    localStorage.setItem("members",JSON.stringify(fetchMembers()))

}


  return (

      <div className="detailAdherent">
        <img src={ require('../Member/Image/'+member.image) }  alt={member.nom}/>
        <div id="info">
        <label>{member.livres.length} Borrowed books</label>
        <h1>{member.nom} {member.prenom}</h1>
        <h5 onClick={changeStatus}>Status : {etat}</h5>
        <hr/>
        <p>{member.description}</p>
        <b>Borrowed books</b>
        <section>
        <hr/>
        {member.livres.map((step ,index) => (
            <Book key={index} isbn={step.isbn} image={step.image} categorie={step.categorie} titre={step.titre} nbExemp={step.nbExemp}  etat={step.etat} auteur={step.auteur}  >
            {step.description}
            </Book>
            
        ))
        }
        
        </section>
        </div>
      </div>
  );
}

export default MemberDetail;