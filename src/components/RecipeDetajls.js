import React, { Component } from 'react'
import { recipe } from '../tempDetails';


class RecipeDetajls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {},
      url: `https://www.food2fork.com/api/get?key=072542ee9ef93b04bb6e69134e74ac1&rId=${this.props.id}`
    }
  }
  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=072542ee9ef93b04bb6e69134e74ac1&rId=${id}`;
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState( (state, props) => {
        return { recipe: json.recipe }
      }, () => {

      })
    } catch(error) {
      console.log(error);
    }
  }
  render() {
    const { image_url, publisher, publisher_url, source_url , title, ingredients } = this.state.recipe;
    return (
     <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <button type="button" className="btn btn-warning mb-5 text-capitalize">
              back to recipe list
            </button>
            <img src={image_url} className="d-block w-100" alt="recipe"/>

            </div>
            {/* {details} */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {publisher}
              </h6>
              <a href={publisher_url} target="_blank" className="btn btn-success mt-2 text-capitalize ">
                recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">ingredients</h2>
                {
                  ingredients.map( (item, index) => {
                    (

                      <li  key={index} className="list-group-item text-slanted">
                        {item}
                      </li>
                    )
                  }
              </ul>
            </div>
          </div>
        </div>
     </React.Fragment>
    )
  }
}

export default RecipeDetajls
