import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;



class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  searchMovie = (e) => {
    e.preventDefault()
    
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(({results}) => {
      this.setState({
        reviews: results,
        searchTerm: ''
      })
      
    })
  }

  renderMovieSearch = () => {
    return this.state.reviews.map(review => {
     return <MovieReviews key={review.id} movie={review.display_title} summary={review.summary_short} url={review.url} />
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Search Movie Reviews</h2>

        <form onSubmit={this.searchMovie}>
        <input type="text" id="search" onChange={this.handleChange} value={this.state.search}/>
          <button type="submit">Search</button>
        </form>  

        { this.renderMovieSearch() }
        
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
