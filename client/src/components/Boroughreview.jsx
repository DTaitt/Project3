import React, {Component} from 'react';
import {ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Boroughreview extends Component{
componentDidMount(){
  function getReviews(){
    fetch('/api/location/reviews')
    .then((response) => {
      console.log(response)
      return response.json()
    })
  }
}

render(){
    return(
      <div className="BoroughReview-div">
        <div> 
        </div>
        <form>
          <input type="submit" value="Edit" />
          <input type="submit" value="Delete" />
        </form>
      </div>
    );
  }
}

export default Boroughreview; 