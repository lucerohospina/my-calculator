import React, { Component } from 'react';


class Screen extends Component {
    render(){
      const {num} = this.props
        
        return (
             
               <div className="text-right col-sm-12">
                   {num}
               </div>
           
        )
    }
   }
   
export default Screen;
