import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="wrapper"> 
                <form onSubmit={this.props.submitHandler}>

                    <label> First Name</label>
                    <input 
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        /*value={this.state.first_name}*/ 
                        onChange={this.props.changeHandler} 
                    />
                    
                    <label> Last Name</label>
                    <input 
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name" 
                        /*value={this.state.last_name}*/ 
                        onChange={this.props.changeHandler} 
                    />

                    <label> Email </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        /*value={this.state.last_name}*/ 
                        onChange={this.props.changeHandler} 
                    />

                    <label> Confirm Email </label>
                    <input 
                        type="text" 
                        name="email_confirmation" 
                        placeholder="Confirm Email" 
                        /*value={this.state.last_name}*/ 
                        onChange={this.props.changeHandler} 
                    />

                    <label> Password </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        /*value={this.state.last_name}*/ 
                        onChange={this.props.changeHandler} 
                    />

                    <label> Confirm Password </label>
                    <input 
                        type="password" 
                        name="password_confirmation" 
                        placeholder="Confirm Password" 
                        /*value={this.state.last_name}*/ 
                        onChange={this.props.changeHandler} 
                    />
                    
                    <button type="submit">Sign Up</button>
                    {this.props.isSuccessful ? <Redirect to='/' /> : null}
                </form>
            </div>
        ); 
    }
}

export default SignupForm;