import React from 'react';

class UsersList extends React.Component {
  render() {
    const whoFavoritedTheMovie = this.props.whoFavoritedTheMovie;
    return (
      <div>
        {whoFavoritedTheMovie.length === 0
          ? ( 
              <p>None of the current users liked this movie</p>
            )
          : (
              <div>
                <p>Liked By:</p>
                <ul>
                  {whoFavoritedTheMovie.map(who => (
                    <li key={who.userID}>{who.userName}</li>
                  ))}
                </ul>
              </div>
            )
        }
      </div>
    )
  }
}

export default UsersList;