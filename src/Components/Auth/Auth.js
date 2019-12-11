import React, {Component} from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'


class Auth extends Component {
    constructor(){
        super()
        this.state = {
        username: '',
        password: ''
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleRegister = () => {
        const {username, password} = this.state;
        Axios.post('/api/register',{username, password}).then(res => {
            // console.log(res.data)
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
            // console.log(this.props.history)
        })
    }
    handleLogin = () => {
        Axios.post('/api/login', {username: this.state.username, password: this.state.password}).then( res => {
            console.log(res.data)
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        })
    }

    render(){
    return (
        <div>Auth Component
            <input 
            name='username' 
            placeholder='username'
            onChange={(e) => this.handleInput(e)}/>
            <input 
            name='password'
            placeholder='password'
            onChange={(e) => this.handleInput(e)}
            type="password"/>
            <button onClick={this.handleLogin}>Log in</button>
            <button onClick={this.handleRegister}>Register</button>
        </div>
        )
    }
}

export default connect (null, {getUser})(Auth)