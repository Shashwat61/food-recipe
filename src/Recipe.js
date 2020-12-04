import React from "react";
import style from './recipe.module.css';
function Recipe(props){


  return (
    <div className={style.recipe}>
    <h1>{props.title}</h1>
    <ol>
    {props.ingredients.map(ingredient =>(
      <li>{ingredient.text}</li>
    ))}
    </ol>
    <p><span className={style.calorie}>Calories</span> {props.calories}</p>
    <img className={style.image} src={props.img}/>
    </div>

  )
}

export default Recipe;
