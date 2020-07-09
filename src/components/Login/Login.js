import React, { useState } from "react"
import './Login.css';
import { fetchMemberByEmailPassword } from "../../services/members.service"


function Login() {

  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");


  const login=()=>{
  const member=fetchMemberByEmailPassword(email,password);

  if(member)
    if(member.etat=="Actif")
    {
      localStorage.setItem('current',JSON.stringify(member));
      window.open("../books")
    }
    else if(member.etat=="Banned")
      alert("Your account has been banned !!")
    else
      alert("Your registration is pending !!\nPlease wait for confirmation from the librarian")
  else
  alert('Incorrect password or email')
  }

  return (
    <div className="login" id="id01">
    <div class="imgcontainer">
    <img src={require("../../logo.png")} alt="logo" className="brand-logo"/>
    </div>

    <div class="container">
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
        
      <button type="submit" onClick={login}>Login</button>
      <label>
        <a href="./inscription">Create An acount</a>
      </label>
    </div>

    </div>
  );
}

export default Login;