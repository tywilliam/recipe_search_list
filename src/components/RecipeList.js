import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
class RecipeList extends Component {
    render() {
        const { recipes } = this.props;
    return (
      <div>
          <RecipeSearch/>

            <div className="container my-5">
            {/* {title} */}
                <div className="row">   
                    <div className="col-10 mx-auto col-md-5 text-uppercase mb-3"></div>
                </div>
            </div>
            {/* end of tiele */}
          Hello from Search
            <h1 className="text-slanted">recipe list</h1>
            <div className="row">
                {
                    recipes.map( recipe => {
                        return (
                            <Recipe 
                            key={recipe.id}
                            recipe={recipe} />

                    )
                    })
                }
            </div>

          <Recipe/>
      </div>
    )
  }
}

export default RecipeList
