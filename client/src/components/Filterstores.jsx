import React, {Component} from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import Storelist from './Storelist.jsx';
import Dropdownfilter from './Dropdownfilter.jsx';


  
class Filterstores extends Component{
  constructor(props) {
    super(props);
    this.state = {
      storeDataLoaded: false,
      brooklynFoodData: null,
    }
  }

  componentDidMount() {
    this.fetchBrooklynFoodData();
    console.log(document.location.pathname);
  }

  fetchBrooklynFoodData() {
    fetch('http://localhost:3001/api/location/brooklynfood')
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        this.setState({
          storeDataLoaded: true,
          brooklynFoodData: jsonRes.data.yelpData.businesses,
        })
        console.log(this.state.storeDataLoaded)
        console.log(this.state.brooklynFoodData)
      })
  }

  boroughCheck() {
    if (document.location.pathname === '/brooklyn') {
      console.log('boroughCheck is workinga')
      // this.sendStoreData();
      //refactor this so that it can work with sendStoreData func
      if (this.state.storeDataLoaded) {
        console.log('sendStoreData is working')
        return <Storelist foodData={ this.state.brooklynFoodData } storeDataLoaded={ this.state.storeDataLoaded } />
      } else {
        return <img className="loading" src="img/loading.gif" /> 
      }
    } else {
        return <img className="loading" src="img/loading.gif" /> 
      }
  }

  // sendStoreData() {
  //   if (this.state.storeDataLoaded) {
  //     console.log('sendStoreData is working')
  //     return <Storelist foodData={ this.state.brooklynFoodData } storeDataLoaded={ this.state.storeDataLoaded } />
  //   } else {
  //     return <p>LOADING ...</p>
  //   }
  // }

  render(){
   return(
      <div>
        <div className="Navthreeoptions">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Food" className="Foodtab">
              { /*<Storelist foodData={ this.state.brooklynFoodData } /> */}
              { this.boroughCheck() }
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