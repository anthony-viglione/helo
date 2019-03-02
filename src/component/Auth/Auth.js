import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }

    handleInput(prop, val){
        this.setState({
            [prop]:val
        })
    }

    async register(){
        console.log('hit register')
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            let res = await axios.post('/auth/register', user)
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
        this.props.history.push('/dashboard')
    }
    
    render(){
        console.log(this.state.username)
        console.log(this.state.password)
        return (
            <div>
                <h1>Helo</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div>Username: </div>
                    <input onChange={e=>{this.handleInput('username', e.target.value)}}/>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div>Password : </div>
                    <input type='password' onChange={e=>{this.handleInput('password', e.target.value)}}/>
                </div>
                <div>
                    <button>Login</button>
                    <button onClick={() => this.register()}>Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;