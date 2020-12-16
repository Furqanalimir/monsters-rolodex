import React from 'react';
import { Card } from '../card/card.component';
import './card-list.css';

export const CardList = variable =>{
        
    return (
    <div className='card-list'>
    {  
      variable.monster.map( value =>(
      <Card key={value.id} monster={value} /> 
      
        )  )}
</div>)
}