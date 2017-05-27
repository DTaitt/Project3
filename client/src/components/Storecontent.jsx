import React, {Component} from 'react';

class Storecontent extends Component{
  render(){
    return(
      <div className="Div-Storecontent">
        <h1 className="store_name">{ this.props.name }</h1>
        <img src={ this.props.img } alt="Pic from api" /> 
        <div className="Store-content-text">
          <h2 className="store_address">{ this.props.location }</h2>
          <p>{ this.props.city }</p>
          <p>unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
      </div>
    );
  }
}

export default Storecontent;