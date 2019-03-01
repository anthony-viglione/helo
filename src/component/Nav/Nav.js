import React from 'react';
import {withRouter} from 'react-router-dom'; // gives acces to these props to components that get passed into it on export.

function Nav(props) {
    // console.log(props.location.pathname)
    // console.log(props.history)

    let handleHome = () => {
        props.history.push('/dashboard')
    }

    let handleNewPost = () => {
        props.history.push('/new')
    }

    let handleLogout = () => {
        props.history.push('/')
    }

    if (props.location.pathname !== '/') {
        return (
            <div>
                <button onClick={()=>{handleHome()}}>Home</button>
                <button onClick={()=>{handleNewPost()}}>New Post</button>
                <button onClick={()=>{handleLogout()}}>Logout</button>
            </div>
        )
    }
    return null //as written, nothing will execute after this line
}

export default withRouter(Nav);