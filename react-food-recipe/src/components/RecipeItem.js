import React from "react";
const RecipeItem = props => {
    const { name, image, ingredientLines } = props;
    return ( <div className = "card" >
        <div className = "card py-2 text-center mt-3" >
        <img src = {image} className = "img-fluid rounded-circle mx-auto w-50" />
        <div className = "card-body" >
        <h5 key = {name} > {name} </h5> </div> 
        <ul className = "list-group list-group-flush"> 
        {
           ingredientLines.map(ingredient => ( <li className = "list-group-item" > {ingredient} </li>
            ))
        } 
        </ul> </div> </div>
    )
}

export default RecipeItem;