import React, {Component} from 'react';
import 
{Tabs,
  Tab} from 'react-bootstrap';
  import {TabContent} from 'react-bootstrap';
  import {Navtabs} from 'react-bootstrap';
import Dropdownfilter from './Dropdownfilter.jsx';  
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
        // console.log(jsonRes.data.review);
        this.setState({
          reviewsLoaded: true,
          reviewData: jsonRes.data.review,
        })
      })
      // console.log(this.state.reviewData)
  }

  // renderReviews() {
  //   if (this.state.reviewsLoaded) {
  //     console.log('loaded!')
  //     console.log(this.state.reviewData[0].name)
  //     console.log(this.state.reviewData[0].review)
  //     this.state.reviewData.map(function() {
  //       return <Boroughreview />
  //     })
  //   }
  // }
  render(){
    return(   
      <div className="Mixedtab">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Store Info">
            <Filterstores />
          </Tab>
          <Tab eventKey={2} title="Borough Review">
          { this.state.reviewsLoaded 
            ? 
            this.state.reviewData.map((i) => {
              console.log(this)
              console.log(this.state)
              console.log(this.state.reviewData)
              console.log(this.state.reviewData[0])
              console.log(this.state.reviewData.location)
              return <Boroughreview location={ this.state.reviewData[i].location } name={ this.state.reviewData[i].name } review={ this.state.reviewData[i].review } key={ Date.now() } />
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