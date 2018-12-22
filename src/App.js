import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormGroup, FormControl, ControlLabel } from 'react-bootsrap/lib';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetajls';
class App extends Component {
  state = {
    recipes: recipes,
    url: 'https://www.food2fork.com/api/search?key=072542ee9ef93b04bb6e69134e74ac1',
    details_id: 35382,
    pageIndex: 1
  };
  async getRecipes() {
    const data = await fetch(this.state.url);
    const jsondata = await data.json();
    this.setState({
      recipes: jsondata.recipes
    });
  } catch(error) {
    console.log(error);
  }
displayPage = (index) => {
  switch(index) {
    default:
     case 1:
      return ( 
        <RecipeList recipes={this.state.recipes} /> 
      )
      case 0:
       return (
         <RecipeDetails id={this.state.details_id} />
       )
  }
}
  // componentDidMount() {
    // this.getRecipes();
  // }
  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        Hello from app
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
