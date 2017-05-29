import React, {Component} from 'react';

import Storecontent from './Storecontent.jsx';
import Dropdownfilter from './Dropdownfilter.jsx';

class Storelist extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     brooklynFoodDataLoaded: false,
  //     brooklynFoodData: null,
  //   }
  // }

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
  //         brooklynFoodDataLoaded: true,
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
            {/* brooklyn food data */}
            { this.props.brooklynFoodDataLoaded 
            ? 
            this.props.brooklynFoodData.map((store, index) => {
              // console.log(store)
              return <Storecontent name={ store.name } img={ store.image_url } location={ store.location.address1 } city={ store.location.city } key={ index } />
            })
            :
            console.log('NOT LOADED')  } 
          {/* brooklyn night data */}
            { this.props.brooklynNightDataLoaded 
            ? 
            this.props.brooklynNightData.map((store, index) => {
              // console.log(store)
              return <Storecontent name={ store.name } img={ store.image_url } location={ store.location.address1 } city={ store.location.city } key={ index } />
            })
            :
            console.log('NOT LOADED')  } 
            {/* brooklyn fashion data */}
            { this.props.brooklynFashionDataLoaded 
            ? 
            this.props.brooklynFashionData.map((store, index) => {
              // console.log(store)
              return <Storecontent name={ store.name } img={ store.image_url } location={ store.location.address1 } city={ store.location.city } key={ index } />
            })
            :
            console.log('NOT LOADED')  }  
        </div>
      </div>
    );
  }
}

export default Storelist;