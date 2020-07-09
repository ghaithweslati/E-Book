import React from 'react';
import Member from '../Member/Member';
import './MembersList.css';


function MembersList(props) {
  var tab=props.tab;

  
  return (
    

      <div onClick={props.helloFn} className="listAdherent">
        <h1>List of Members</h1>
        <hr/>
        <section>
        {tab.map((step ,index) => (
            <Member key={index} id={step.id} image={step.image} nom={step.nom} prenom={step.prenom}  reseau_social={step.reseau_social} borrowed={step.livres.length}  >
                        {step.description}
            </Member>
        ))}
      </section>
        
      </div>
  );
}

export default MembersList;