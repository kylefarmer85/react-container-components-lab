import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(({results}) => {
      this.setState({
        reviews: results
      })
    })
  }

  renderMovieReviews = () => {
    return this.state.reviews.map(review => {
     return <MovieReviews key={review.id} movie={review.display_title} summary={review.summary_short} url={review.url} />
    })
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Movie Reviews</h2>
        { this.renderMovieReviews() }
        
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;



