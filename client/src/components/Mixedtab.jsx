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
  render(){
    return(
        <div className="Mixedtab">
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Store Info">
                <Filterstores />
              </Tab>
              <Tab eventKey={2} title="Borough Review">
                <Boroughreview />
                <Boroughreview />
                <Boroughreview />
              </Tab>
            </Tabs>
          </div>
    )
  }
}
export default Mixedtab;