import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props1) => {
    console.log(props1)
    return (
        <div className="card-grid">
            {props1.monsters.map(monster => {
                return (
                    <Card key={monster.id} monster={monster}/>
                )
            })}
        </div>
    )
}

export const CardList2 = (props2) => {
    console.log(props2)
    return (
        <div className="card-grid">
            {
                props2.children.map ( child => {
                    return (child)
                })
            }
        </div>
    )
}
