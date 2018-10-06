import React, { Component } from 'react'
 class UsersFavoriteMovies extends Component {
  render() {
    console.log('Props', this.props);
    return (
      <ol className='contact-list'>
      {this.props.profiles.map((profile) => (
      		
          <li key={profile.id} className='contact-list-item'>
            <div className='contact-details'>
              <p>{this.props.users[profile.userID].name} favorite Movie is {profile.favoriteMovieID}</p>
            </div>
          </li>
        ))}

       </ol>
    )
  }
}
 export default UsersFavoriteMovies 