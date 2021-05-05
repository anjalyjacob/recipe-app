import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';

const App = () => {
  const apiurl = 'http://nodeserver-env.eba-r2q34gwg.ap-south-1.elasticbeanstalk.com/findAllUserProducts';

  const [recipes, setRecipes] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
    getRecipies();
  }, []);

  const getRecipies = async () => {
    await axios.get(apiurl)
      .then(res => {
        setRecipes(res.data);
        setSearchResult(res.data)
      })
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    if(search){
      let data = recipes.filter(ele => ele.item.trim().toLowerCase().includes(search.trim().toLowerCase()));
      setSearchResult(data);
    } else{
      setSearchResult(recipes);
    }
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form" >
        <input type="text" className="search-bar" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {searchResult.map((recipe, index) => (
          <Recipe key={index} item={recipe.item}
            quantity={recipe.quantity}
            image={recipe.image} />
        ))}
      </div>
      
    </div>
  );
}
export default App;
