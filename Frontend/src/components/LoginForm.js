import React from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     email: '',
        //     password: '',
        //     isLogged: ''
        // }
        console.log(this.props)
    }

    
    render() {
        return(
            <div className="main-div">
                <div className="header">
                    <h1> Login </h1>
                    <p> 
                        Don't you already have an account?
                        <Link to='/signup' >Sign Up</Link>
                    </p>
                </div>
                <div className="credentials">
                    <form onSubmit={this.props.submitHandler}>
                        <label>Email</label>
                        <input type="text" name="email" /*value={this.props.email}*/ onChange={this.props.changeHandler} />
                        <label>Password</label>
                        <input type="password" name="password" /*value={this.props.password}*/ onChange={this.props.changeHandler} />
                        <button type="submit"> Submit </button>
                    </form>
                </div>
                {this.props.isLogged ? <Redirect to={{
                    pathname: '/homepage', 
                    }}
                    /> : null}
            </div>
        );
    }
}

export default LoginForm;