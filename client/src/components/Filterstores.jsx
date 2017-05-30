import React, {Component} from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import Storelist from './Storelist.jsx';


  
class Filterstores extends Component{
  constructor(props) {
    super(props);
    this.state = {
      brooklynFoodDataLoaded: false,
      brooklynFoodData: null,
      brooklynNightDataLoaded: false,
      brooklynNightData: null,
      brooklynFashionDataLoaded: false,
      brooklynFashionData: null,
    }
  }

  componentDidMount() {
    this.fetchBrooklynFoodData();
    this.fetchBrooklynNightData();
    this.fetchBrooklynFashionData();
    ////console.log(document.location.pathname);
  }

  fetchBrooklynFoodData() {
    fetch('api/location/brooklynfood')
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        this.setState({
          brooklynFoodDataLoaded: true,
          brooklynFoodData: jsonRes.data.yelpData.businesses,
        })
        ////console.log(this.state.brooklynFoodDataLoaded)
        ////console.log(this.state.brooklynFoodData)
      })
  }

  fetchBrooklynNightData() {
    fetch('api/location/brooklynnight')
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        this.setState({
          brooklynNightDataLoaded: true,
          brooklynNightData: jsonRes.data.yelpData.businesses,
        })
        ////console.log(this.state.brooklynNightDataLoaded)
        ////console.log(this.state.brooklynNightData)
      })
  }

  fetchBrooklynFashionData() {
    fetch('api/location/brooklynfashion')
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        this.setState({
          brooklynFashionDataLoaded: true,
          brooklynFashionData: jsonRes.data.yelpData.businesses,
        })
        ////console.log(this.state.brooklynFashionDataLoaded)
        ////console.log(this.state.brooklynFashionData)
      })
  }

  // fetchBrooklynFoodData() {
  //   fetch('api/location/brooklynfashion')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((jsonRes) => {
  //       this.setState({
  //         brooklynFoodDataLoaded: true,
  //         brooklynFoodData: jsonRes.data.yelpData.businesses,
  //       })
  //       ////console.log(this.state.brooklynFoodDataLoaded)
  //       ////console.log(this.state.brooklynFoodData)
  //     })
  // }

  boroughFoodCheck() {
    if (document.location.pathname === '/brooklyn') {
      //refactor this so that it can work with sendStoreData func
      if (this.state.brooklynFoodDataLoaded) {
        return (
          <div>
            <Storelist brooklynFoodData={ this.state.brooklynFoodData } brooklynFoodDataLoaded={ this.state.brooklynFoodDataLoaded } />
          </div>
        )  
      } else {
        return <img className="loading" src="img/loading.gif" /> 
      }
    } else {
      return <img className="loading" src="img/loading.gif" /> 
    }
  }

  boroughNightCheck() {
    if (document.location.pathname === '/brooklyn') {
      //refactor this so that it can work with sendStoreData func
      if (this.state.brooklynNightDataLoaded) {
        //console.log(this.state.brooklynNightDataLoaded)
        return (
          <div>
            <Storelist brooklynNightData={ this.state.brooklynNightData } brooklynNightDataLoaded={ this.state.brooklynNightDataLoaded } />
          </div>
        )  
      } else {
        return <img className="loading" src="img/loading.gif" /> 
      }
    } else {
      return <img className="loading" src="img/loading.gif" /> 
    }
  }

  boroughFashionCheck() {
    if (document.location.pathname === '/brooklyn') {
      //refactor this so that it can work with sendStoreData func
      if (this.state.brooklynFashionDataLoaded) {
        //console.log(this.state.brooklynFashionDataLoaded)
        return (
          <div>
            <Storelist brooklynFashionData={ this.state.brooklynFashionData } brooklynFashionDataLoaded={ this.state.brooklynFashionDataLoaded } />
          </div>
        )  
      } else {
        return <img className="loading" src="img/loading.gif" /> 
      }
    } else {
      return <img className="loading" src="img/loading.gif" /> 
    }
  }

  // sendStoreData() {
  //   if (this.state.brooklynFoodDataLoaded) {
  //     ////console.log('sendStoreData is working')
  //     return <Storelist foodData={ this.state.brooklynFoodData } brooklynFoodDataLoaded={ this.state.brooklynFoodDataLoaded } />
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
              { this.boroughFoodCheck() }
            </Tab>
            <Tab eventKey={2} title="Nightlife" className="Nighttab">
              { this.boroughNightCheck() }
            </Tab>
            <Tab eventKey={3} title="Fashion" className="Fashiontab">
              { this.boroughFashionCheck() }
            </Tab>
          </Tabs>
        </div>
      </div>     
   );
  }
}

export default Filterstores;