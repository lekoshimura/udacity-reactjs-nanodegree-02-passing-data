import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FavoritedMovie from './FavoritedMovie';
import NonFavoritedMovie from './NonFavoritedMovie';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

let buildArrayMovies = function () {
  const moviesArray = [];
  const numItems = Object.keys(movies).length;
  for (let i = 1; i <= numItems; i++) {
    moviesArray.push({
      id: movies[i].id,
      name: movies[i].name,
      whoFavoritedTheMovie: whoFavoritedTheMovie(movies[i].id)
    });
  };
  return moviesArray;
};

let whoFavoritedTheMovie = function (movieId) {
  let who = profiles
    .filter(profile => profile.favoriteMovieID === movieId.toString())
    .map(profile => { return { userID: profile.userID, userName: users[profile.userID].name } });
  return who;
};

class App extends Component {
  render() {
    const moviesArray = buildArrayMovies();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        <ol>
          {moviesArray.map(movie => (
            <li key={movie.id}>
              {movie.whoFavoritedTheMovie.length > 0
                ? <FavoritedMovie movieName={movie.name} who={movie.whoFavoritedTheMovie} />
                : <NonFavoritedMovie movieName={movie.name} />
              }
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
