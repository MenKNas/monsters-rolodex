import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className="single-card">
            <img alt={`monster-${props.monster.id}`} src={`https://robohash.org/${props.monster.id}?set=set4 `}/>
            <h3> {props.monster.name} </h3>
            <p> {props.monster.website} </p>
            <p> {props.monster.address.city} </p>
        </div>
    )
}


