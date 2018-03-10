import React, { Component } from 'react';


class Screen extends Component {
    render(){
      const {num} = this.props
        
        return (
             
               <div className="">
                   {num}
               </div>
           
        )
    }
   }
   
export default Screen;
