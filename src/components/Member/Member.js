import React from 'react';
import './Member.css';


function Membre(props) {
  return (
<div className="membre">
<a href={"members/"+props.id}><img src={ require('./Image/'+props.image) }  alt={props.nom}/></a>
  <h4>{props.nom} {props.prenom}</h4><br></br>

  <span>{props.borrowed} Borroweds books</span>
  
  <center><br></br>
  <div class="col-md-12">
                    <ul class="social-network social-circle">
                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                    </ul>				
				</div>
  </center>
</div>

  );
}

export default Membre;