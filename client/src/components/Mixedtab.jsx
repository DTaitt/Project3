import React, {Component} from 'react';
import 
{Tabs,
  Tab} from 'react-bootstrap';
import Filterstores from './Filterstores.jsx'; 
import Boroughreview from './Boroughreview.jsx';
// The code for this was borowed from stack overflow. 
class Mixedtab extends Component{
  constructor(props) {
    super(props);
    this.state = {
      reviewsLoaded: false,
      reviewData: null,
    }
  }

  componentDidMount() {
    this.fetchReviewData();
  }

  fetchReviewData() {
    fetch('http://localhost:3001/api/location/reviews')
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        this.setState({
          reviewsLoaded: true,
          reviewData: jsonRes.data.review,
        })
      })
  }

  render(){
    return(   
      <div className="Mixedtab">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Store Info">
            <Filterstores />
          </Tab>
          <Tab eventKey={2} title="Borough Review">
          { this.state.reviewsLoaded 
            ? 
            this.state.reviewData.map((review, index) => {
              return <Boroughreview location={ review.location } name={ review.name } review={ review.review } key={ index } />
            })
            :
            <p>LOADING...</p> }
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Mixedtab;