import React from 'react';
import UsersList from './UsersList';

class MovieItem extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <li key={movie.id}>
        <h2>{movie.name}</h2>
        <UsersList whoFavoritedTheMovie={movie.whoFavoritedTheMovie} />
      </li>
    )
  }
}

export default MovieItem;