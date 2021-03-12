import React from 'react'

class NonFavoritedMovie extends React.Component {
  render() {
    return (
      <div>
      	<h2>{this.props.movieName}</h2>
      	<p>None of the current users liked this movie</p>
      </div>
    ) 
  }
}

export default NonFavoritedMovie;