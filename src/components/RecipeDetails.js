import React, { Component } from 'react'
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
    
    state={
        recipe : recipe,
        id : this.props.details_id,
        url:'https://www.food2fork.com/api/get?key=ac1d2c6bf8a512d23e2862f06a965076&rId='+this.props.details_id
    } 
    
    async getDetails(){
      
        try{
            let details = await fetch(this.state.url);
            let jsonDetails = await details.json();
            console.log(jsonDetails);
                 this.setState({
                     recipe : jsonDetails.recipe
                 })
        }catch(error){
                console.log(error);
        }
      
    } 
    
    componentDidMount(){
        this.getDetails();
    }

    render() { 
        const{handleIndex} =this.props;
        let ingredients = this.state.recipe.ingredients;       
        return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto  col-md-6 my-3">
                        <button onClick={()=>{handleIndex(1)}} className="btn btn-warning mb-5 text-capitalize" type="button">
                            back to recipe list
                        </button>
                       
                        <img className="d-block w-100" src={this.state.recipe.image_url} alt={this.state.recipe.title}/>
                        
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <div className=" my-5 recipe-details">
                                <h3 className="text-slanted text-capitalize">{this.state.recipe.title}</h3>
                                <h4 className="text-capitalize text-warning">Published by {this.state.recipe.publisher}</h4>
                                <a  className=" btn btn-primary text-capitalize" rel="noopener noreferrer" href={this.state.recipe.publisher_url} target="_blank" >publisher link</a>
                                <a className="mx-3 btn btn-success text-capitalize" rel="noopener noreferrer" href={this.state.recipe.source_url} target="_blank" >recipe</a>
                                <div className="recipe-ingredients">
                                    <h2 className="mt-4">Ingredients:</h2>
                                    <ul className="list-group mt-4">
                                        {
                                            ingredients.map((ingredient,index)=>{
                                                
                                                return(
                                                    <li key={index} className="list-group-item text-slanted">{index+1}) {ingredient}</li>
                                                )
                                            })
                                        }
                                    </ul>    
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }

}
