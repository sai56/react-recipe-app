import React, { Component } from 'react'

export default class Recipes extends Component {

  render() {
    let publisher = this.props.recipe.publisher;
    let img_url = this.props.recipe.image_url;
    let title = this.props.recipe.title;
    let details = this.props.recipe.source_url;
    let recipe_id = this.props.recipe.recipe_id; 
    let handleDetails = this.props.handleDetails; 
    
    // console.log(id);
    return (
      <React.Fragment>
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
                <img className="img-card-top" style={{height:'14rem'}} src={img_url} alt={title}/>
                
                <div className="card-body text-capitalize">
                  <h6>{title}</h6>
                  <h6 className="text-warning text-slanted ">Published by {publisher}</h6>
                </div>
                
                <div className="card-footer">
                <button onClick={()=>{handleDetails(0,recipe_id)}} className="btn btn-primary" type="button">Details</button>
                <a href={details} target="_blank" rel="noopener noreferrer" className="mx-2 btn btn-success text-capitalize">recipe url</a>
                </div>               
            </div>  
          </div>
              {/* 
              <h2>{publisher}</h2>
              <img src={img_url} alt={title}/>
              <a href={details}>Further info</a> */}
      </React.Fragment>
    )
  }
}
