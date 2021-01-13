import React from 'react'
import { Container }from '../styles/usercard';

function UserCard(props) {

    
    return (
        <Container className={props.main ? "main" : ""}>
            <img src={props.user.avatar_url}/>
            <div>
                <h2>Login: {props.user.login}</h2>
                {props.user.bio && 
                    <caption>Bio: {props.user.bio}</caption>}
                {props.user.location && 
                    <address>Location: {props.user.location}</address>}
                <a href={props.user.html_url}>Github</a>
            </div>
        </Container>
    )
}

export default UserCard
