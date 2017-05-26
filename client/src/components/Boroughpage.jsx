import React, {Component} from 'react';

//importing Three options which are Food, Night,Reatil

import Filterstores  from './Filterstores.jsx';

import Headborough from './Headborough.jsx';

import Mixedtab from './Mixedtab.jsx';

class Boroughpage extends Component{

  render(){
    return(
        <div>
            <Headborough/>
           <img className="Boruough-pic" src="https://static1.squarespace.com/static/561e8167e4b06b1723d8e1a8/561ed005e4b0d14919f3671f/563d1b0be4b067114932693d/1446845196496/small_24779.jpg" alt="Main Pic"/> 
            <main>
                 <Mixedtab />
            </main>
    
        </div>
      
    );
  }
}

export default Boroughpage;
