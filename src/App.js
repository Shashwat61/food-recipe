import React,{useEffect,useState} from "react";
import Recipe from './Recipe';
import './App.css';

function App() {
const APP_ID="606d03bf";
const APP_KEY="330d705c3e613849acdec74d3810c0fd";
// const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

const[recipes,setRecipes]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery]=useState('chicken');

useEffect(  ()=>{
  getRecipes();

},[query]);

const getRecipes=async () => {
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

const data=await response.json();
setRecipes(data.hits);
}

const handleChange=e=>{
  setSearch(e.target.value)
}

const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  return (
    <div className="App">
<form onSubmit={getSearch} className="search-form">
<input placeholder="Search for recipes" type="text" className="search-bar" value={search} onChange={handleChange}/>
<button type="submit" className="search-button">Search</button>
</form>
<div className="recipes">
{recipes.map(recipe =>(
  <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
img={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
  />

))}
</div>
    </div>
  );
}

export default App;
