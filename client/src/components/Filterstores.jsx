import React, {Component} from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import Storelist from './Storelist.jsx';
import Dropdownfilter from './Dropdownfilter.jsx';


  
class Filterstores extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     storeDataLoaded: false,
  //     storeData: null,
  //   }
  // }

  // componentDidMount() {
  //   this.fetchReviewData();
  // }

  // fetchStoreData() {
  //   fetch('http://localhost:3001/api/location/reviews')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((jsonRes) => {
  //       this.setState({
  //         reviewsLoaded: true,
  //         reviewData: jsonRes.data.review,
  //       })
  //     })
  // }

  render(){
   return(
      <div>
        <div className="Navthreeoptions">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Food" className="Foodtab">
              <Storelist/>
            </Tab>
            <Tab eventKey={2} title="Nightlife" className="Nighttab">
              <Storelist/> 
            </Tab>
            <Tab eventKey={3} title="Fashion" className="Fashiontab">
              <Storelist/>
            </Tab>
          </Tabs>
        </div>
      </div>     
   );
  }
}

export default Filterstores;