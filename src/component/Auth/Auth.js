import React, { Component } from 'react';

class Auth extends Component{

    render(){
        return (
            <div>
                <h1>Helo</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div>Username: </div>
                    <input/>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div>Password : </div>
                    <input/>
                </div>
                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;