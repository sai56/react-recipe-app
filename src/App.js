import React, { Component } from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipesList from './components/RecipesList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {

  constructor(props){
  super(props);
  this.state= {
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=ac1d2c6bf8a512d23e2862f06a965076",
    base_url:"https://www.food2fork.com/api/search?key=ac1d2c6bf8a512d23e2862f06a965076",
    id: 35382,
    pageIndex:1,
    value:'',
    query:'&q=',
    error:''
  }
  this.handleIndex = this.handleIndex.bind(this);
  this.handleDetails = this.handleDetails.bind(this);
}


  async getData() {
    
    try{
      let data = await fetch(this.state.url);
      let jsonData = await data.json();
      if(jsonData.count===0){
          this.setState(()=>{
            return {error:'sorry,your search did not return any results'}
          })
      }else{
        this.setState({
          recipes:jsonData.recipes
        });
      }

      
    }catch(error){
      console.log(error);
    }
    
  }

  componentDidMount(){
    this.getData();
  }

  handleIndex(index){
    this.setState({
      pageIndex:index
    });
  }

  handleDetails(index,id){
    this.setState({
      pageIndex:index,
      details_id:id
    })
  }

  handleChange = (e)=>{
   
    this.setState({
      value:e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState(()=>{
      return{
        url:this.state.base_url+this.state.query+this.state.value,
        value:""
      }
    },()=>{
      this.getData();
    })  
  }

  displayPage(index){
    switch(index){
      default:
      case 1:
        return (<RecipesList error={this.state.error} recipe={this.state.recipes} handleDetails={this.handleDetails} value={this.state.value} handleChange={this.handleChange} handleSubmit = {this.handleSubmit}/>)
      case 0:
        return(<RecipeDetails details_id={this.state.details_id} handleIndex={this.handleIndex}/>)
    }
  }

  render() {
    // console.log(this.state.recipes);

    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }

}

export default App;
