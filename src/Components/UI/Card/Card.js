import React from 'react';
import './Card.scss';
const Card = (props) => {
    const choseCard = (event,number) =>{
        props.toggleActiveBeverages();
    }

    return (
        <div className={`card__container ${props.activeBeverage===true && "card__active"}`} 
        onClick={(event)=>choseCard(event,props.index)}
        >
        <img src={props.imgsrc && props.imgsrc } alt="img" width="100px" />

            
        </div>
    )
}

export default Card
