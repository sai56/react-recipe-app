import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {

    let value = this.props.value;
    let handleChange = this.props.handleChange;
    let handleSubmit = this.props.handleSubmit;

    return (
    <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 my-5 text-center">
              <h1 className="text-slanted text-capitalize">
                  search for recipes with <strong className="text-danger">Food2Fork</strong> 
              </h1>       
                <form onSubmit={handleSubmit} >
                    <label className="my-3 text-capitalize">
                      type keywords separated by commas
                    </label>
                    <div className="input-group">
                      <input 
                            value={value}
                            onChange={handleChange} 
                            className="form-control" 
                            type="text" 
                            placeholder="chicken,onion,carrot"
                      />
                      <div className="input-group-append">
                        <button type="submit" className="input-group-text text-white bg-primary ">
                            <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
    </React.Fragment>
    )
  }
}
