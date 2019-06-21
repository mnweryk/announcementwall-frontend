import React, {Component} from 'react'
import axios from "axios";

class User extends Component  {
    state = {
        email: ' ',
        password: ' '
    }

    submit = (e) => {
        e.preventDefault();
        let data = this.state

        console.log(data)

        axios.post('http://localhost:8000/user/login', data)
        .then(res => {
            this.setState({
                message: 'Youe have succesfully logged in'
            })
            localStorage.setItem('user-token', res.data.token);
            console.log(res.data.token);            
        })
        .catch(res => {
            this.setState({
                message: "wrong login data"
            })
            console.log("got you!")
        })
    }

    signUp = (e) => {
        e.preventDefault();
        let data = this.state

        axios.post('http://localhost:8000/user/signup', data)
        .then(res => {
            this.setState({
                message: 'You have succesully signed up, now you can login'
            })
            
        }).catch(res => {
            this.setState({
                message: "Email already exists"
            })
        })
    }

    render() {
        return(
            <div className="container">
                <h4 className="red-text">{this.state.message}</h4>
            <div className="text-medium">To login press your email and password</div>
            <p></p>
            <form onSubmit={e => this.submit(e)}>
                <input ref="email" type="text" placeholder="Email" onChange={e => this.setState({ email: e.target.value})} />
                <input ref="password" type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value})} />
                <button className="btn waves-effect waves-light" type="submit" onClick={e => this.submit(e)}> Submit </button>
            </form>
            <p>If you are not signed up</p>
            <button className="btn waves-effect waves-light"  onClick={e => this.signUp(e)}> Sign up </button>

            </div>
        )
    }
}

export default User