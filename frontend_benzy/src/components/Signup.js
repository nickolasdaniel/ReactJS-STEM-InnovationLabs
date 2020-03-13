import React from 'react'
import axios from 'axios'
import SignupForm from './SignupForm'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './Login';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_pacient: false,
            is_doctor: false,
            first_name: '',
            last_name: '',
            email: '',
            confirm_email: '',
            password: '',
            confirm_password: '',
            isSuccessful: false,
            token: ''
        }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    checkboxHandler = (event) => {
        if(event.target.name === "is_pacient" && event.target.value === "on"){
            this.setState({is_pacient: !this.state.is_pacient})
        } else if (event.target.name === "is_doctor" && event.target.value ==="on") {
            this.setState({is_doctor: !this.state.is_doctor})
        }
    }

    validSignup = (token) => {
        if(token) {
            this.setState({isSuccessful: true /*token: token}*/});
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        // const {token} = this.state;
        const url = "http://localhost:8000/singup_pacient/"
        console.log(this.state)
        axios.post(url, this.state)
            .then(response => {
                console.log(response);
                this.validSignup(response.data.token)
                console.log(this.state.token)
            })
            .catch(error => {
                console.log(error)
            })
        //
    }

    render() {
        return(
            <SignupForm
                changeHandler={this.changeHandler}
                submitHandler={this.submitHandler}
                isSuccessful={this.state.isSuccessful}
                checkboxHandler={this.checkboxHandler}
                is_pacient={this.state.is_pacient}
                is_doctor={this.state.is_doctor}
            />
        );
    }
}

export default Signup;
