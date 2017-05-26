import React, {Component} from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import Storelist from './Storelist.jsx';
import Dropdownfilter from './Dropdownfilter.jsx';


  
class Filterstores extends Component{
  render(){
   return(
      <div>
          <div className="Navthreeoptions">
               <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Food" className="Foodtab"> <Storelist/></Tab>
                <Tab eventKey={2} title="Night" className="Nighttab"> 
                </Tab>
                <Tab eventKey={3} title="Retail" className="Retailtab"><Storelist/></Tab>
              </Tabs>
          </div>
        
        </div>     
   );
  }
}

export default Filterstores;