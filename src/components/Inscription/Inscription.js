import React, { useState } from "react"
import '../Login/Login.css'
import { fetchMembers } from "../../services/members.service"


function Inscription() {

  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [nom, setNomValue] = useState("");
  const [prenom, setPrenomValue] = useState("");
  const [linkedin, setLinkedinValue] = useState("");
  const [twitter, setTwitterValue] = useState("");
  const [facebook, setFacebookValue] = useState("");  
  const [description, setDescriptionValue] = useState("");
  const [image, setImageValue] = useState("");
  
  
  const inscription=()=>{

    const member={id:fetchMembers().length+1,image: image,type:'User', nom: nom, prenom: prenom, email: email,password:password,etat:'En attente',description:description,livres: [],reseau_social: {facebook: facebook, twitter: twitter, linkedin: linkedin}};
    fetchMembers().unshift(member);
    localStorage.setItem('members',JSON.stringify(fetchMembers()));
    localStorage.setItem('current',JSON.stringify(member));
    alert('Successful registration ! please wait for the librarian confirmation');

    }




  return (
    <div className="login" id="id01">
    <div class="imgcontainer">
    <img src={require("../../logo.png")} alt="logo" className="brand-logo"/>
    </div>



    <div class="container">


    <label for="uname"><b>Profil picture</b></label>
      <input type="file" placeholder="Enter picture" name="uname" required 
      onChange={e => setImageValue(e.target.files[0].name)}
      /><br></br>

    <label for="uname"><b>Last name</b></label>
      <input type="text" placeholder="Enter Name" name="uname" required 
      value={nom}
      onChange={e => setNomValue(e.target.value)}
      />

    <label for="uname"><b>Fist Name</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required 
      value={prenom}
      onChange={e => setPrenomValue(e.target.value)}
      />

        <label for="uname"><b>Email</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required 
      value={email}
      onChange={e => setEmailValue(e.target.value)}
      />


      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required
       value={password}
       onChange={e => setPasswordValue(e.target.value)}
      />

      
    <label for="uname"><b>Linkedin</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required 
      value={linkedin}
      onChange={e => setLinkedinValue(e.target.value)}
      />

      
    <label for="uname"><b>Facebook</b></label>
      <input type="text" placeholder="Enter Name" name="uname" required 
      value={facebook}
      onChange={e => setFacebookValue(e.target.value)}
      />

      
    <label for="uname"><b>Twitter</b></label>
      <input type="text" placeholder="Enter Name" name="uname" required 
      value={twitter}
      onChange={e => setTwitterValue(e.target.value)}
      />

      
    <label for="uname"><b>Description</b></label>
      <input type="text" placeholder="Enter Name" name="uname" required 
      value={description}
      onChange={e => setDescriptionValue(e.target.value)}
      />



    

      
        
      <button type="submit" onClick={inscription}>Inscription</button>
      <label>
         <a href="login">Login</a>
      </label>
    </div>

    </div>
  );
}

export default Inscription;