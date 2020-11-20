import React from 'react';

const MovieReviews = (props) => {

  return (
    <div key={props.key}>
      <h3>{props.movie}</h3>
      <p>{props.summary}</p>
      <a href="{props.url}">Click for Full Review</a>
    </div>
  )
}


export default MovieReviews;


