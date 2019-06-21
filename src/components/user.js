import React, {Component} from 'react'

class User extends Component  {
    state = {
        email: ' ',
        password: ' '
    }

    render() {
        return(
            <div className="container">
            <div className="text-medium">To log in press your email and password</div>
            <p></p>
            <input ref="email" type="text" placeholder="Email" onChange={e => this.setState({ email: e.target.value})} />
            <input ref="password" type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value})} />
            {console.log(this.state)}
            </div>
        )
    }
}

export default User