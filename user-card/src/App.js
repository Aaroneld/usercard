
import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './components/usercard';
import { Reset } from 'styled-reset';
import GlobalStyle from './styles/global';

class App extends React.Component {


  state = {
    mainUser: {
      bio: '',
      avatar_url: '',
      location : '',
      html_url: '',
      login: ''
    },
    followers: []
  }

  async componentDidMount(){

    try { 
      const mainUser = await axios.get('https://api.github.com/users/aaroneld');
      const followers = await axios.get('https://api.github.com/users/aaroneld/followers');

      this.setState({
        mainUser: {
          bio: mainUser.data.bio,
          avatar_url: mainUser.data.avatar_url,
          location: mainUser.data.location,
          html_url: mainUser.data.html_url,
          login: mainUser.data.login
        },
        followers: followers.data
      })
      
    }catch(err){
      console.log(err)
    }

  }
  

  render(){
    
    return (
      <div className="app">
        <Reset />
        <GlobalStyle />
        <div>
          <UserCard main user={this.state.mainUser}/>
        </div>
        <div>
          {this.state.followers.map(follower => (
            <UserCard user={follower} />
          ))}
        </div>
      </div>
    )
  }
}

export default App;
