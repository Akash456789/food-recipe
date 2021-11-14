import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
    const [search, setSearch] = useState();
    const [recipes, setRecipes] = useState([]);

    const App_ID = "f479120c";
    const App_key = "caed7f8340f01ca9fd0896e9f5adfe21 ";

    useEffect(() => {
        getRecipes();
    }, []);


    const getRecipes = async() => {
        const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${App_ID}&app_key=${App_key}`);

        setRecipes(res.data.hits);

    }
    const onInputChange = e => {
        setSearch(e.target.value);
    }
    const onSearchClick = () => {
        getRecipes();
    }
    return ( < div className = "App" >

        <
        Header search = { search }
        onInputChange = { onInputChange }
        onSearchClick = { onSearchClick }
        /> <
        div className = "container" > < Recipes recipes = { recipes }
        /> </div > < /div >
    );

}
export default App;