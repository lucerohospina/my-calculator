import React, { Component } from 'react';

class Screen extends Component {
    state = {
        displayValue: "0"
      }

    render(){
      const {displayValue} = this.state

    //   const {num} = this.props
        
        return (
             
               <div className="text-right col-sm-12">
                   {displayValue}
               </div>
           
        )
    }
   }
   
export default Screen;
