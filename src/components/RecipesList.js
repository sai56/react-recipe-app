import React, { Component } from 'react'
import RecipeSearch from './RecipeSearch'
import Recipes from './Recipes'; 

export default class RecipesList extends Component {
  render() {
      let recipes = this.props.recipe;
      let handleDetails = this.props.handleDetails; 
      let value = this.props.value;
      let handleChange = this.props.handleChange;
      let handleSubmit = this.props.handleSubmit; 
      let error = this.props.error;
    return (
        <React.Fragment>
            <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <div className = "container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center mb-3 text-uppercase">
                        <h1 className="text-slanted">Recipe List</h1>
                    </div>
                </div>
                <div className="row">
                {
                    error?
                        <h1 className="text-danger text-center">{error}</h1>
                                :
                        recipes.map(recipe=>{
                            return(
                                <Recipes key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails} />       
                            )
                        })
                }
                </div>
            </div>
        </React.Fragment>
    )
  }
}

