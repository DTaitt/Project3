import React, {Component} from 'react';

import Storecontent from './Storecontent.jsx';
import Dropdownfilter from './Dropdownfilter.jsx';

class Storelist extends Component{
  constructor(props) {
    super(props);
    this.state = {
      storeDataLoaded: false,
      brooklynFoodData: null,
    }
  }

  // componentDidMount() {
  //   this.fetchBrooklynFoodData();
  //   console.log(document.location.pathname);
  // }

  // fetchBrooklynFoodData() {
  //   fetch('http://localhost:3001/api/location/brooklynfood')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((jsonRes) => {
  //       this.setState({
  //         storeDataLoaded: true,
  //         brooklynFoodData: jsonRes.data.yelpData.businesses,
  //       })
  //       // console.log(this.state.brooklynFoodData)
  //     })
  // }

  render(){
    return(
      <div className="Storelist">
        <Dropdownfilter />
        <div className="Inner-div-store-content">
        { /*this.state.storeDataLoaded 
            ? 
            this.state.brooklynFoodData.map((store, index) => {
              // console.log(store)
              return <Storecontent name={ store.name } img={ store.image_url } location={ store.location.address1 } city={ store.location.city } key={ index } />
            })
            :
            <p>LOADING...</p>*/ }
            { this.props.storeDataLoaded 
            ? 
            this.props.foodData.map((store, index) => {
              console.log(store)
              return <Storecontent name={ store.name } img={ store.image_url } location={ store.location.address1 } city={ store.location.city } key={ index } />
            })
            :
            <img className="loading" src="img/loading.gif" /> }  
            { console.log(this.props.foodData) }
            { console.log(this.props.storeDataLoaded) }
        </div>
      </div>
    );
  }
}

export default Storelist;