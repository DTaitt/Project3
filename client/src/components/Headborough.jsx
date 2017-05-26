import React, {Component} from 'react';
import {Images, Image} from 'react-bootstrap';

class Headborough extends Component {
  render(){
    return(
      <header className="Headborough-div-userinfo"> 
        <img src="img/yilp.png" alt="Our logo" className="Borough-logo" /> 
        <div className="Userinfo">
          <img className="Userpic" src="http://imageog.flaticon.com/icons/png/512/27/27825.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" circle /> 
        </div>   
      </header>
    );
  }
}

export default Headborough;



