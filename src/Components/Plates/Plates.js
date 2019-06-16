import React, { Component } from 'react';
import data from '../../data.json';
import Plate from './Plate/Plate';


class Plates extends Component{
    render(){
     
     
      data.map((item, i) => {
        item.id = i + 1;
      });
      
      console.log(data,"newObject");

        const plateData =(
            data.map(p => (
                <Plate 
                key={p.id}
                title={p.title} 
                brand={p.brand}
                price={p.price}
                image={p.image}
                descripticon={p.description} />
        )));
        
        
    
        return(
            <div> {plateData}</div>
           
        )
    }
}
export default Plates;