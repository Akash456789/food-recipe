import React from 'react';

const Header = (props) =>{
  const{search, onInputChange, onSearchClick}=props;
    return (<div className="jumbotron">
        <h1 className="display-1">
            <span className ="material-icons brand-icon">fastfood</span>AKS Food Recipie</h1>
        <div className="input-group w-50 mx-auto">
  <input type="text" className="form-control" placeholder="Search Your Recipe..." value={search} onChange={onInputChange}/>
  <div className="input-group-append"/>
    <button className="btn btn-dark" onClick = {onSearchClick}>Search Recipes</button>
  </div>
</div>
    );
};

export default Header ;