import React from 'react';
import style from '../recipe.module.css';

const Recipe = (props) =>{
    const {
        item,
        quantity,
        image
    } = props
return(
    <div className={style.recipe}>
        <h4 > {item}</h4>
        <p>{quantity}</p>
        <img className={style.image} src={image} alt="" width="200" height="150"/>
    </div>
)
}

export default Recipe;