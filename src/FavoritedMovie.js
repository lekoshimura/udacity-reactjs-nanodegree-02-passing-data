import React from 'react'

class FavoritedMovie extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.movieName}</h2>
        <p>Liked By:</p>
        <ul>
          {this.props.who.map(who => (
            <li key={who.userID}>{who.userName}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FavoritedMovie;