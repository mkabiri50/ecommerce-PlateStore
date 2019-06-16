import React from 'react';
import './Plate.css';

const Plate = (props) => {
    return (
        <div className="Plate" >
            <img src="../../assets/categury/+'{props.image}'" alt="{props.image}" />
            <div className="brand">{props.brand}</div>
            <div className="title">{props.title}</div>
            <div className="price">{props.price}</div>

        </div>
    )

}
export default Plate;