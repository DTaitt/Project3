import React, {Component} from 'react';

import Storecontent from './Storecontent.jsx';
import Dropdownfilter from './Dropdownfilter.jsx';

class Storelist extends Component{
  render(){
    return(
      <div className="Storelist">
        <Dropdownfilter />
        <div className="Inner-div-store-content">
          <Storecontent/>
          <Storecontent/>
          <Storecontent/>
        </div>
      </div>
    );
  }
}

export default Storelist;