import React from 'react';
import MovieItem from './MovieItem';

class MoviesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.moviesArray = [];
    this.profiles = this.props.profiles;
    this.users = this.props.users;
    this.movies = this.props.movies;
  };  
  
  buildArrayMovies() {
    const numItems = Object.keys(this.movies).length;
    for (let i = 1; i <= numItems; i++) {
      this.moviesArray.push({
        id: this.movies[i].id,
        name: this.movies[i].name,
        whoFavoritedTheMovie: this.whoFavoritedTheMovie(this.movies[i].id)
      });
    };
  };
  
  whoFavoritedTheMovie(movieId) {
    let who = this.profiles
      .filter(profile => profile.favoriteMovieID === movieId.toString())
      .map(profile => { return { userID: profile.userID, userName: this.users[profile.userID].name } });
    return who;
  };  
  
  render() {
    this.buildArrayMovies();   
    const movieItems = this.moviesArray.map(movie => (<MovieItem movie={movie} />));
    return <ol> {movieItems} </ol>
  };
}

export default MoviesList;