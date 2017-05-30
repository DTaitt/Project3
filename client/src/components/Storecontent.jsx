import React, {Component} from 'react';

class Storecontent extends Component{
  render(){
    return(
      <div className="Div-Storecontent">
        <h1 className="store_name">{ this.props.name }</h1>
        <img src={ this.props.img } alt="Pic from api" /> 
        <div className="Store-content-text">
          <h2 className="store_address">{ this.props.location }</h2>
          <p>{ this.props.review_count } Reviews</p>
          <p>Phone: { this.props.phone }</p>
          </div>
      </div>
    );
  }
}

export default Storecontent;